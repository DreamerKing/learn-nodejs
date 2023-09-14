import { watch } from 'node:fs/promises';
import process from 'node:process';
import { spawn } from 'node:child_process';

const [, , filename, cmd, l, h] = process.argv;

if (!filename) {
  throw new Error('A filename to watch must be specified');
}

const ac = new AbortController();
const { signal } = ac;

setTimeout(() => {
  ac.abort();
}, 10000);


try {
  const watcher = watch(filename, { signal });
  for await (const event of watcher) {
    console.log(event);
    const ls = spawn(cmd, [l, h, filename]);
    // ls.stdout.pipe(process.stdout);
    console.log(process.argv)
    let output = '';
    ls.stdout.on('data', chunk => output += chunk);
    ls.on('close', () => {
      const [mode, size, filename] = output.split(/\s+/);
      console.log([mode, size, filename]);
    })
  }
} catch (e) {
  if (e.name == 'AbortError') {
    console.error(e);
  }
  // throw e;
}
