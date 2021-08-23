const profiler = require('./03.factory-pattern-Profiler');

function getRandomArray(len) {
    const p = profiler(`Generate a ${len} items random array`);
    p.start();
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(Math.random());
    }
    p.end();
}

getRandomArray(1e6);
console.log("Done!");