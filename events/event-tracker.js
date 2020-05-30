const EventEmitter = require('events');
let ee = new EventEmitter();

ee.on('newListener', (name, listener) => {
    console.log('Event name added:', name);
});

ee.on('a lister', () => {
    
})