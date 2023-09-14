import zmq from 'zeromq';

async function runClient() {
  console.log('Connecting to hello world server...');
  const socket = new zmq.Request();
  socket.connect('tcp://localhost:5555');
  for (let i = 0; i < 10; i++) {
    console.log('Sending hello ', i);
    await socket.send('Hello');
    const [result] = await socket.receive();
    console.log('Received ', result.toString(), i);
  }
}

runClient();