const net = require('net');
const PORT = 8214; //'./unixsocket'
const client = new net.Socket();
client.setEncoding('utf8');

client.connect(PORT, 'localhost', function() {
    console.log('connected to server');
    client.write('Who needs a browser to communicate?');
});

process.stdin.on('data', function(data) {
    client.write(data);
});

client.on('data', function(data) {
    console.log(data);
});

client.on('close', function() {
    console.log('connection is closed!');
});