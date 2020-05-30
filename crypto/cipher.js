const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const pwd = 'King';

const key = crypto.scryptSync(pwd, 'Dreamer', 24);

const iv = Buffer.alloc(16, 0);
const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = '';

cipher.on('readable', () => {
    let chunk;
    while(null !== (chunk = cipher.read())){
        encrypted += chunk.toString('hex');
    }
});

cipher.on('end', () => {
    console.log(encrypted);
});

cipher.write('海阔天空');
cipher.end();