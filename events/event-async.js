const EventEmitter = require('events');
const ee = new EventEmitter({ captrueRejections: true });
ee.on('hi', async (name) => {
    // console.log(`hi ${name}`);
    throw new Error("Boom!");
});

// ee.on('error', (err) => console.error(err.message));
ee[Symbol.for('nodejs.rejection')] = console.log;

ee.emit('hi', "King");
console.dir(ee, { depth: 6});

