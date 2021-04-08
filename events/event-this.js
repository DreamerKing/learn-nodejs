const { EventEmitter } = require('events');
const myEmitter = new EventEmitter();

/* myEmitter.on('hello', function(a, b) {
    console.log(a, b, this === myEmitter);
    console.log(this);
}); */

myEmitter.on('hello', (a, b) => {
    setImmediate(() => {
        console.log('async log');
    })
})

myEmitter.emit('hello', 'A', 12);
console.log("async");

