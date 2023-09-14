import { Readable } from 'stream';
import Chance from 'chance';

const chance = new Chance();

let emittedBytes = 0;

const rs = new Readable({
  read(size) {
    const chunk = chance.string({ length: size });
    this.push(chunk, 'utf-8');
    emittedBytes += size;
    if (chance.bool({ likelihood: 5 })) {
      this.push(null);
    }
  }
});

rs
  .on('data', (chunk) => {
    console.log("Chunk received:", chunk.toString(), chunk.length);
  })
  .on('end', () => console.log('Produce Data size: ', emittedBytes))
  .on('error', (err) => console.error(err));