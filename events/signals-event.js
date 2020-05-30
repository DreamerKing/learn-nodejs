const signals = require('signals');

let obj = {
    started: new signals.Signal()
}

function onStarted(param1, param2) {
    console.log(param1, param2);
}

obj.started.add(onStarted);
obj.started.dispatch('hello', 'world');