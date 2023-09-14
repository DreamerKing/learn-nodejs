import {
  readFile, writeFile
} from 'fs/promises';

import { gzip } from 'zlib';
import { promisify } from 'util';

const pgzip = promisify(gzip);

const fileName = process.argv[2];

/* readFile(fileName)
  .then((data) => pgzip(data))
  .then((gz) => writeFile(`${fileName}.gz`, gz))
  .then(() => {
    console.log(`${fileName} is compressed!`)
  })
  .catch((err) => {
    console.error(err);
  }); */

try {
  const data = await readFile(fileName);
  const gz = await pgzip(data);
  await writeFile(`${fileName}.gz`, gz);
  console.log(`${fileName} is compressed!`)
} catch (e) {
  console.error(e);
}