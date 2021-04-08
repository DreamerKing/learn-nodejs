import assert from 'assert';
import CountStream from './01.countstream.mjs'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, 'dirname');

// example
const cs = new CountStream('example');

let passed = 0;

cs.on('total', (count) => {
    assert.equal(count, 2);
    passed++;
    console.log('total:', count);
});

fs.createReadStream(__filename).pipe(cs);

process.on('exit', () => {
    console.log('passed:', passed);
});


