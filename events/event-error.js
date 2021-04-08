const EventEmitter = require('events');

/* class MusicPlayer extends EventEmitter {};

let mp = new MusicPlayer();
mp.on('play', (song) => {
    mp.emit('error', `unable to play ${song}`);
});

mp.on('error', (error) => console.error(`Error: ${error}`));

setTimeout(() => {
    mp.emit("play", "海阔天空");
}, 500); */

const e = new EventEmitter();
// e.on('error', (err) => {
//     console.error(err.message);
// });

e.on(EventEmitter.errorMonitor, (err) => {
    MyMonitoringTool.log(err);
})

e.emit('error', new Error('opps!'));