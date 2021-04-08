import { open } from 'fs/promises';

let filehandle;

try {
  filehandle = await open('test/world', 'r+');
  await filehandle.truncate(4);
} finally {
    filehandle?.close();
}