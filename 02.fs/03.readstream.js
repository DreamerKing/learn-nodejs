#!/usr/bin/env node
import { open } from 'node:fs/promises';

// console.log(process.argv)

const fd = await open(process.argv[2]);
fd.createReadStream().pipe(process.stdout);