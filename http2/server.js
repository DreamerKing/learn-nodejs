const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
    key: fs.readFileSync('./localhost-privatekey.pem'),
    cert: fs.readFileSync('./localhost-cert.pem')
});

server.on('error', (err) => console.log(err));
server.on('ping', (p) => console.log(p, 'Ping'));

server.on('stream', (stream, headers) => {
    console.log(headers);
    
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });
    stream.write('Hello King');
    stream.end('<h1>Hello World</h1>');
});

server.listen(8443);