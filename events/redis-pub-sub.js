const redis = require('redis');
const client1 = redis.createClient();
const client2 = redis.createClient();

let count = 0;

client1.on('subscribe', (channel, count) => {
    client2.publish('channel', 'Hello World');
});

client1.on('message', (channel, message) => {
    console.log(`client1 channel ${channel}: ${message}`);
    client1.unsubscribe();
    client1.end();
    client2.end();
});

client1.subscribe('channel');