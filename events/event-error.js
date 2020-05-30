const EventEmitter = require('events');

class MusicPlayer extends EventEmitter {};

let mp = new MusicPlayer();
mp.on('play', (song) => {
    mp.emit('error', `unable to play ${song}`);
});

mp.on('error', (error) => console.error(`Error: ${error}`));

setTimeout(() => {
    mp.emit("play", "海阔天空");
}, 500);