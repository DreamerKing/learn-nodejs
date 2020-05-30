const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
    console.error("Error:",err)
});

client.on('monitor', (timestamp, args) => {
    console.log('Time: ', timestamp, args);
});

client.on('ready', () => {
    console.log("ready!"); 
})