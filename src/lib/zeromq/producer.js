import zmq from 'zeromq';

const sock = zmq.socket('push');

let i = 0;

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');

setInterval(() => {
  console.log('sending work');
  sock.send(`some work ${i++}`);
}, 500);