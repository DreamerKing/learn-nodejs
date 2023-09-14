import zmq from 'zeromq';

const sock = zmq.socket('sub');

sock.connect("tcp://127.0.0.1:3000");
sock.subscribe('kitty cats');
console.log("Subscriber connected to port 3000");

sock.on('message', (topic, msg) => {
  console.log('topic: %s , message: %s', topic, msg);
});