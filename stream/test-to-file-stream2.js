import { join } from 'path';
import { Writable } from 'stream';
import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';


const tfs = new Writable({
  objectMode: true,
  async write(chunk, encoding, callback) {
    await mkdir(dirname(chunk.path), { recursive: true });
    await writeFile(chunk.path, chunk.content);
    await callback();
  }
});

tfs.write({
  path: join('files', 'file1.txt'),
  content: 'learn node'
});

tfs.write({
  path: join('files', 'file2.txt'),
  content: 'learn react'
});

tfs.end(() => {
  console.log('stream ended');
});