const fs = require("fs");
fs.readFile(__dirname, () => {
    setInterval(() => {
        console.log("interval");
    },1000);

    setTimeout(() => {
        console.log("timeout");
    }, 0);

    
    setImmediate(() => {
        console.log("immediate");
    });

    process.nextTick(() => {
        console.log("nextTick");
    })
})
