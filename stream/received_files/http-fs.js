import { createServer } from 'http';
import { createReadStream } from 'fs';
import { createGzip } from 'zlib';

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

createServer((req, res) => {
    res.writeHead(200, { 'content-encoding': 'gzip' });
    createReadStream('index.html')
        .pipe(createGzip())
        .pipe(res);
}).listen(3000, (err, res) => {
    console.log(`server listening on localhost:3000`);
}).on('error', (err) => console.error(err));