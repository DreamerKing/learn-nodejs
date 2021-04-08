import { Writable } from 'stream';

export default class CountStream extends Writable {
    constructor(matchText, options) {
        super(options);
        this.count = 0;
        this.matcher = new RegExp(matchText, 'ig');
    }
    
     _write(chunck, encoding, cb) {
        let matches = chunck.toString().match(this.matcher);
        if(matches){
            this.count = matches.length;
        }
        cb();
    }

    end(){
        this.emit('total', this.count);
    }
}