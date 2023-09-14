import { readFile } from 'node:fs/promises';

try {
    const fd = await readFile('fs.md');
    console.log(fd.toString());
} catch (error) {
    console.error(error)
}






