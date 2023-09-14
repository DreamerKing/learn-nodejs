import zmq from 'zeromq';

const sock = zmq.socket('pull');

sock.connect("tcp://127.0.0.1:3000");
console.log("worker connected to port 3000");

sock.on('message', (msg) => {
  console.log('work: %s', msg.toString());
});