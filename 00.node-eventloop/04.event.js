const EventEmitter = require("events");
const util = require("util");

// function MyEmitter() {
//     EventEmitter.call(this);
//     this.emit("event");
// }

// util.inherits(MyEmitter, EventEmitter);

class MyEmitter extends EventEmitter {
    constructor(props) {
        super(props);
        // this.emit("event");
        process.nextTick(() => {
            this.emit("event");
        })
    }
}

const myEmitter = new MyEmitter();
// myEmitter.emit("event");

myEmitter.on("event", () => {
    console.log("an event");
});