import { Worker } from 'worker_threads';
import { AsyncResource } from 'async_hooks';
import { EventEmitter } from 'events';

const kTaskInfo = Symbol('kTaskInfo');
const kWorkerFreeEvent = Symbol('kWorkerFreeEvent');

class WorkerPoolTaskInfo extends AsyncResource {
    constructor(callback) {
        super('WorkerPoolTaskInfo');
        this.callback = callback;
    }

    done(err, result) {
        this.runInAsyncScope(this.callback, null, err, result);
        this.emitDestroy();
    }
}

export default class WorkerPool extends EventEmitter {
    constructor(numberThreads) {
        super();
        this.numberThreads = numberThreads;
        this.workers = [];
        this.freeWorkers = [];
        this.tasks = [];
        for(let i = 0; i < numberThreads; i++) {
            this.addNewWoker();
            this.on(kWorkerFreeEvent, () => {
                if(this.tasks.length > 0) {
                    const { task, callback } = this.tasks.shift();
                    this.runTask(task, callback);
                }
            });
        }
    }
    addNewWoker() {
        const worker = new Worker(new URL('task_processor.mjs', import.meta.url));
        worker.on('message', (result) => {
            worker[kTaskInfo].done(null, result);
            worker[kTaskInfo] = null;
            this.freeWorkers.push(worker);
            this.emit(kWorkerFreeEvent);
        });
        worker.on('error', (err) => {
            if(worker[kTaskInfo]) {
                worker[kTaskInfo].done(err, null);
            } else {
                this.emit('error', err);
            }
            this.workers.splice(this.workers.indexOf(worker), 1);
            this.addNewWoker();
        });
        this.workers.push(worker);
        this.freeWorkers.push(worker);
        this.emit(kWorkerFreeEvent);
    }

    runTask(task, callback) {
        if(this.freeWorkers.length === 0) {
            this.tasks.push({ task, callback });
            return;
        }
        const worker = this.freeWorkers.pop();
        worker[kTaskInfo] = new WorkerPoolTaskInfo(callback);
        worker.postMessage(task);
    }

    close() {
        for(const worker of this.workers) {
            worker.terminate();
        }
    }
}