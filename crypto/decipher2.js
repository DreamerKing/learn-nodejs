const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-192-cbc';
const pwd = 'King';
const key = crypto.scryptSync(pwd, 'Dreamer', 24);

const iv = Buffer.alloc(16, 0);

const decipher = crypto.createDecipheriv(algorithm, key, iv);

const input = fs.createReadStream('test.enc');
const output = fs.createWriteStream('test1.txt');

input.pipe(decipher).pipe(output);