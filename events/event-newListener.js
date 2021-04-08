const EventEmitter = require('events');

const e = new EventEmitter();
e.once('newListener', (name, listener) => {
    if(name == 'a') {
        e.on('a', () => {
            console.log("B");
        });
    }
});

e.on('a', () => {
    console.log("A");
});

e.emit('a');
console.log(e.getMaxListeners());
e.setMaxListeners(12);
console.log(EventEmitter.listenerCount(e, "a"));
console.log(e.listenerCount('a'));
console.log(e.listeners('a'));
console.log(e.eventNames());
console.log(EventEmitter.defaultMaxListeners);
console.log(e.getMaxListeners());


