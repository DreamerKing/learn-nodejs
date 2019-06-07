const Writable = require('stream').Writable;
const util = require('util');

module.exports = CountStream;

util.inherits(CountStream, Writable);

function CountStream(match, options){
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(match, 'ig');
}

CountStream.prototype._write = function(chunk, encodeing, callback){
    let matches = chunk.toString().match(this.matcher);
    if(matches){
        this.count += matches.length;
    }
    callback();
}

CountStream.prototype.end = function(){
    this.emit('total', this.count);
}