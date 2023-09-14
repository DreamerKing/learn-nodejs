import { createServer } from 'http';
import { createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { basename, resolve } from 'path';
import { createDecipheriv, randomBytes } from 'crypto';

const secret = randomBytes(24);
console.log(`Generating secret: ${secret.toString('hex')}`);

createServer((req, res) => {
    const fileName = basename(req.headers['x-filename']);
    const destFileName = resolve('received_files', fileName);
    const iv = Buffer.from(req.headers['x-initialization-vector'], 'hex');
    console.log(`File request received: ${fileName}`);
    req.pipe(createDecipheriv('aes192', secret, iv))
        .pipe(createGunzip())
        .pipe(createWriteStream(destFileName))
        .on('finish', () => {
            res.writeHead(201, { 'Content-Type': 'text/plain' });
            res.end('OK');
            console.log(`File saved: ${destFileName}`);
        })
}).listen(3000, () => {
    console.log(`server listening on localhost:3000`);
});