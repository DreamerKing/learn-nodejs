import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipe = promisify(pipeline);

const fileName = process.argv[2];

const inputStream = createReadStream(fileName);
const outputStream = createWriteStream(`${fileName}.gz`);
const gzipStream = createGzip();

try {
  await pipe(inputStream, gzipStream, outputStream)
  console.log(`${fileName} is compressed successfully`);
} catch (err) {
  console.error(err);
}

createReadStream(fileName)
  .pipe(createGzip())
  .pipe(createWriteStream(`${fileName}.gz`))
  .on('finish', () => { console.log(`${fileName} is compressed successfully`) })
  .on('error', (err) => { console.error(err) });


