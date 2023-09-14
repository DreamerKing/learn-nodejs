import { createServer } from 'http';
import Chance from 'chance';

const chance = new Chance();

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  let i = 0;
  while (chance.bool({ likelihood: 60 })) {
    console.log(i++)
    res.write(`${chance.string()}\n`);
  }
  res.end('\n');
  res.on('finish', () => {
    console.log('all data sent');
  });
});

server.listen(3000, () => {
  console.log('listening on port localhost:3000');
});