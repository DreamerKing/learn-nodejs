#!/usr/bin / env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(process.argv.slice(2)).parse();

console.log(argv);

const argv1 = yargs(hideBin(process.argv)).argv;

console.log('argv1:', argv1);

const argv2 = yargs(['-x', '1', '-y', '2']).argv;

console.log(argv2);