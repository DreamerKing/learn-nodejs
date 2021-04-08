const { EventEmitter } = require('events');
const emitter = new EventEmitter();

let m = 0;

emitter.once('count', () => {
    console.log(m++);
});

emitter.emit('count');
emitter.emit('count');
