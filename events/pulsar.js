const EventEmitter = require('events');

class Pulsar extends EventEmitter {
    constructor(speed, times) {
        super();
        this.speed = speed;
        this.times = times;
        this.on('newListener', (eventName, listener) => {
            if(eventName == "pulse") {
                this.start();
            }
        });
    }

    start(){
        let id = setInterval(() => {
            this.emit('pulse');
            this.times--;
            if(this.times === 0) {
                clearInterval(id);
            }
        }, this.speed);
    }

    stop(){
        if(this.listeners('pulse').length === 0)  {
            throw new Error('No listeners have been added!');
        }
    }
}

let p = new Pulsar(500, 5);

p.stop();
p.on('pulse', () => {
    console.log('.');
});
