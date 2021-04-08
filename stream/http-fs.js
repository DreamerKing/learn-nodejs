const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

/* http.createServer(function(req, res) {
    fs.readFile('./index.html', function(err, data) {
        if(err) {
            res.statusCode = 500;
            res.end(String(err));
        } else {
            res.end(data);
        }
    });
}).listen(3000); */

http.createServer(function(req, res){
    res.writeHead(200, { 'content-encoding': 'gzip'});
    fs.createReadStream(__dirname + '/index.html')
    .pipe(zlib.createGzip())
    .pipe(res);
}).listen(3000);