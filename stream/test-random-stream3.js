import { Readable } from 'stream';

const arrs = [{
  name: 'foo',
  age: 20
}, {
  name: 'bar',
  age: 16
}];

const rs = Readable.from(arrs);

rs.on('data', (data) => {
  console.log("Chunk received:", data);
})
  .on('end', () => console.log('finished'))
  .on('error', (err) => console.error(err));