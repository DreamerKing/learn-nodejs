import zmq from "zeromq";

console.log(zmq)

async function runServer() {
  const socket = zmq.Reply();
  await socket.bind("tcp://*:5555");
  for await (const [msg] of socket) {
    console.log(`Received : [ ${msg.toString()} ]`);
    await socket.send('World!');
  }
}

runServer();