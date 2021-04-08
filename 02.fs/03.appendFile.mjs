import { open,  appendFile } from 'fs/promises';

await appendFile('test/world', 'oops');
