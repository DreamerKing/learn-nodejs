import http from 'http';
import { AsyncLocalStorage, AsyncResource, executionAsyncId } from 'async_hooks';

/* const asyncLocalStorage = new AsyncLocalStorage();
function logWithId(msg) {
    const id = asyncLocalStorage.getStore();
    console.log(`${id !== undefined ? id : '-'}: ${msg}`);
}


let idSeq = 0; 
http.createServer((req, res) => {
    asyncLocalStorage.run(idSeq++, () => {
        console.log('start');
        setImmediate(() => {
            logWithId('start');
            res.end();
        });
    });
}).listen(9000);


http.get('http://localhost:9000');
http.get('http://localhost:9000'); */

/* const store = { id: 1};

const asyncLocalStorage = new AsyncLocalStorage();

asyncLocalStorage.enterWith(store);

let test = asyncLocalStorage.getStore();
console.log(test);

setTimeout(() => {
    let test2 = asyncLocalStorage.getStore();
    console.log(test2); 
}, 1000) */


const asyncResource = new AsyncResource(
    'test',
    {
        triggerAsyncId: executionAsyncId(),
        requireManualDestroy: false
    }
);

function fn(a, b) {
    setTimeout(() => {
        console.log(a, b);
    }, 2000)
}

asyncResource.runInAsyncScope(fn, null, 1, 2);
let id = asyncResource.asyncId();
console.log(id);

asyncResource.emitDestroy();

// asyncResource.asyncId();

// asyncResource.triggerAsyncId();