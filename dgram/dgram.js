const dgram = require('dgram');
const client = dgram.createSocket('udp4');
process.stdin.on('data', function(data) {
    console.log(data.toString('utf8'));
    client.send(data, 0, data.length, 8142, 'localhost', function(err, bytes) {
        if(err) {
            console.error('error', err);
        } else {
            console.log('successful!');
        }
    });
});