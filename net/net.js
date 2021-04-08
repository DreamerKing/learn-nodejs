const net = require('net');
const PORT = 8124 //'./unixsocket';
// const unixsocket = './unixsocket';

const server = net.createServer(function(connection) {
    console.log('connected');
    connection.on('data', function(data) {
        console.log(`${data} from ${connection.remoteAddress}:${connection.remotePort}`);
        connection.write('Repeating: '+ data);
    });
    connection.on('closed', function() {
        console.log('connection is closed');
    });
}).listen(PORT);

server.on('listening', function() {
    console.log(`listening on ${PORT}`);
});

server.on('error', function(err) {
    if(err.code == 'EADDRINUSE') {
        console.console.warn('Address in use, retrying ...');
        setTimeout(() => {
            server.close();
            server.listen(PORT);
        }, 1000);
    } else {
        console.error(err)
    }
});


// nc 127.0.0.1 8124