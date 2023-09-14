import { Writable } from 'stream';
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

export default class ToFileStream extends Writable {
  constructor(options) {
    super({ ...options, objectMode: true });
  }

  async _write(chunk, encoding, callback) {
    console.log(encoding, chunk);
    await mkdir(dirname(chunk.path), { recursive: true });
    await writeFile(chunk.path, chunk.content);
    await callback();
  }
}