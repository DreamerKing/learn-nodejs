const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-192-cbc';
const pwd = 'King';

const key = crypto.scryptSync(pwd, 'Dreamer', 24);

const iv = Buffer.alloc(16, 0);
const cipher = crypto.createCipheriv(algorithm, key, iv);

const input = fs.createReadStream('test.txt');
const output = fs.createWriteStream('test.enc');

input.pipe(cipher).pipe(output);