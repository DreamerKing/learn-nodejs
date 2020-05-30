const EventEmitter = require('events');

function MusicPlayer(track) {
    this.track = track;
    this.playing = false;
 /*    for (const key in EventEmitter.prototype) {
        if (EventEmitter.prototype.hasOwnProperty(key)) {
            this[key] = EventEmitter.prototype[key]; 
        }
    } */
}


function merge(a,b){
    if(a && b) {
        for (const key in b) {
            a[key] = b[key];
        }
    }
    return a;
}

MusicPlayer.prototype = {
    toString(){
        if(this.playing){
            return `Now playing: ${this.track}`;
        } else {
            return "Stoped."
        }
    }
};

merge(MusicPlayer.prototype, EventEmitter.prototype);
    
let mp = new MusicPlayer("Holy baby!");

mp.on("play", () => {
    mp.playing = true;
    console.dir(mp.toString());
});

mp.emit("play");