import { exec } from 'node:child_process'
/* 
const cp = exec("cat messy.txt | sort | uniq", { shell: '/bin/zsh' });
cp.stdout.on('data', (d) => console.log(d));
cp.stderr.on('data', (d) => console.log(d));
*/

/* 
const cp = exec('hello', { shell: "/usr/local/bin/node" });
cp.stdout.on('data', (d) => console.log(d));
cp.stderr.on('data', (d) => console.error(d)); 
*/

const cp = exec('echo "The \\$HOME is $HOME"');
cp.stdout.on('data', (d) => console.log(d));