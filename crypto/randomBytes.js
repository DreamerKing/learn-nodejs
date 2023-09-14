import { randomBytes, createHash } from 'crypto';
import { createReadStream } from 'fs';

/* randomBytes(32, (err, salt) => {
    console.log(salt.toString('hex'));
});

const hash = createHash('sha256', 'hello world');
hash.on('readable', () => {
    const data = hash.read();
    if (data) {
        console.log(data.toString('hex'), 'test');
    }
});

hash.write('hello world');
hash.end(); */

const hash = createHash('sha256');
const input = createReadStream('./test.txt');
input.on('readable', () => {
    const data = input.read();
    if (data) {
        hash.update(data);
    } else {
        console.log(hash.digest('hex'))
    }
});