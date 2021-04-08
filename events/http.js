const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log('request event');
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end('Hello World');
});

server.on('connection', () => {
    console.log('connection event');
});

server.listen(1337, () => {
    console.log("listen event");
});

console.log('server runing at localhost:1337');

