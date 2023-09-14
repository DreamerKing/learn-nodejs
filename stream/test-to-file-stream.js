import { join } from 'path';
import ToFileStream from './to-flie-stream.js';

const tfs = new ToFileStream();

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