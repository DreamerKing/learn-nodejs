'use strict';
const Hapi = require('@hapi/hapi');
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello Hapi';
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        return `Hello, ${encodeURIComponent(request.params.name)}!`;
    }
})

const init = async () => {
    await server.start();
    console.log(`Server runing at: ${server.info.uri}`);
};

process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1);
});

init();