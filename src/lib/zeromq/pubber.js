import zmq from 'zeromq';

const sock = zmq.socket('pub');

let i = 0;

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher bound to port 3000');

setInterval(() => {
  console.log('sending work');
  sock.send([`kitty cats`, i++]);
}, 1000);