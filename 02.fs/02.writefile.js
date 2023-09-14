import { writeFile } from 'fs/promises';

await writeFile('./test/world.txt', 'hello world');
console.log('write file done');