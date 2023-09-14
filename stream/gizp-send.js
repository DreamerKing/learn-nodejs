import { request } from 'http';
import { createGzip } from 'zlib';
import { createReadStream } from 'fs';
import { basename } from 'path';
import { createCipheriv, randomBytes } from 'crypto';

const [, , fileName, serverHost, secret] = process.argv;

const bsecret = Buffer.from(secret, 'hex');
const iv = randomBytes(16);
const httpRequestOptions = {
  hostname: serverHost,
  port: 3000,
  path: '/',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/octet-stream',
    'Content-Encoding': 'gzip',
    'X-Filename': basename(fileName),
    'X-Initialization-Vector': iv.toString('hex'),
  }
};

const req = request(httpRequestOptions, res => {
  console.log(`Server response: ${res.statusCode}`);
});

createReadStream(fileName)
  .pipe(createGzip())
  .pipe(createCipheriv('aes192', bsecret, iv))
  .pipe(req)
  .on('finish', () => {
    console.log(`File successfully sent`);
  });


// node gizp-send.js http-fs2.js localhost