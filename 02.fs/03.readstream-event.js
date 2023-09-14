#!/usr/bin/env node
import { open } from 'node:fs/promises';
console.log(process.argv);

const fd = await open(process.argv[2]);
const ws = fd.createReadStream();
ws.on('data', chunk => process.stdout.write(chunk))
  .on('error', err => process.stderr.write(`Error >>: ${err.message}`));
