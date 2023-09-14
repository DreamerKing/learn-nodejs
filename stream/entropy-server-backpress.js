import { createServer } from 'http';
import Chance from 'chance';

const chance = new Chance();

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  function generateMore() {
    while (chance.bool({ likelihood: 60 })) {
      const readomChunk = chance.string({ length: 16 * 1024 - 1 });
      const shouldContine = res.write(`${readomChunk}\n`);
      if (!shouldContine) {
        console.log('backpressure!');
        return res.once('drain', generateMore)
      }
    }
    res.end('\n');
  }

  generateMore();

  res.on('finish', () => {
    console.log('all data sent');
  });
});

server.listen(3000, () => {
  console.log('listening on port localhost:3000');
});