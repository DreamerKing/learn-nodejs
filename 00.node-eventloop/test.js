#! /usr/bin/env node
import { readFile } from 'fs/promises';

try {
  const text = await readFile('./01.timeout-vs-immedidate.js');
  console.log('file: ' + text);
} catch (e) {
  console.error(e)
}

setImmediate(() => {
  console.log('this is running while file is being read');
});

const timer1 = setInterval(() => {
  console.log('process will run forever')
}, 1_000);

setTimeout(() => {
  timer1.unref();
  console.log('cancel setInterval');
  timer1.ref();
}, 2000)