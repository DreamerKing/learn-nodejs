const zlib = require('zlib');
var database = [[],[],[],[],[],[],[],[]];
var bitmasks = [1, 2, 4, 8,16, 32, 64, 128];

function store(buf, callback){
    var db = buf[0]; 
    var key = buf.readInt8(1);
    if(buf[2] === 0x78){
        zlib.inflate(buf.slice(2), function(err, inflatedBuf){
            if(err) return console.error(err);
            var data = inflatedBuf.toString();
            bitmasks.forEach(function(bitmarsk, index){
                if((db & bitmarsk)=== bitmarsk){
                    database[index][key] = data;
                }
            });
            callback(database);
        });
    }
}

var header = new Buffer(2);
header[0] = 8;
header[1] = 0;
zlib.deflate("King", function(error, deflateBuf){
    if(error) return console.error(error);
    var message = Buffer.concat([header, deflateBuf]);
    store(message, function(data){
        console.log(data);
    });
});