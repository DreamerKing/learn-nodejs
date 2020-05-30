const domain = require('domain');
const EventEmitter = require('events');
const audioDomain = domain.create();

class AudioDevice extends EventEmitter {
    constructor() {
        super();
        this.on('play', this.play.bind(this));
    }
    play(){
        this.emit('error', 'not implemented yet!');
    }
}

class MusicPlayer extends EventEmitter {
    constructor() {
        super();
        this.audioDevice = new AudioDevice();
        this.on('play', this.play.bind(this));
        this.emit('error', 'No audio track are available');
    }
    play(){
        this.audioDevice.emit("play");
        console.log("Now playing");
    }
}

audioDomain.on('error', (err) => {
    console.log('audioDomain error: ', err);
});

audioDomain.run(() => {
    let mp = new MusicPlayer();
    mp.play();
});