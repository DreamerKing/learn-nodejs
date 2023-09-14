import process from 'node:process';

process.on('message', (msg) => {
  console.log(`child process: ${msg}`);
});

process.send(`child process from`);