import { fork } from 'node:child_process';

const cp = fork('./sub-process.js');

cp.on('message', (msg) => {
  console.log('Parent Process: ' + msg);
});

cp.send("I am your parent");