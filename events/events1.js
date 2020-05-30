const EventEmitter = require('events');
const EVRNT_TYPE = {
    play: 'play', 
    stop: 'stop'
}

const AudioDevice = {
    play(track){
        console.log("play ->",track);
    },
    stop(track){
        console.log("stop ->", track);
    }
}

class MusicPlayer extends EventEmitter {
    // constructor() {
    //     super();
    //     this.playing = false
    // }
};

const mp = new MusicPlayer();

mp.on(EVRNT_TYPE.play, (song) => {
    mp.playing = true;
    AudioDevice.play(song);
});

function play(song){
    console.log("play other", song);
}

mp.on(EVRNT_TYPE.play, play);
mp.removeListener('play', play);

mp.on(EVRNT_TYPE.stop, (song) => {
    mp.playing = false;
    AudioDevice.stop(song);
})

mp.emit(EVRNT_TYPE.play, "海阔天空");
console.log(mp.playing);


setTimeout(() => {
    mp.emit(EVRNT_TYPE.stop, "海阔天空");
    console.log(mp.playing);
}, 1000);