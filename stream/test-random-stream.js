import RandomStream from './random-stream.js';

const rs = new RandomStream();
rs
  .on('data', (chunk) => {
    console.log("Chunk received:", chunk.toString(), chunk.length);
  })
  .on('end', () => console.log('Produce Data size: ', rs.emittedBytes))
  .on('error', (err) => console.error(err));