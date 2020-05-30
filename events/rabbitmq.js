const rabbitmq = require('rabbitmq-nodejs-client');

let subhub = rabbitmq.create({task: 'sub', channel: "myChannel"});
let pubhub = rabbitmq.create({task: 'pub', channel: "myChannel"});

subhub.on('connection', (hub) => {
    hub.on('message', (msg) => {
        console.log(msg);  
    });
});

subhub.connect();

pubhub.on('connecttion', (hub) => {
    hub.send('Hello World');
});
pubhub.connect();