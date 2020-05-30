const express = require('express');

const app = express();

app.on('hello', () => {
    console.log('hello express');
});

app.get('/', (req, res) => {
    res.app.emit('hello');
    res.send("Hello world");
});

app.listen(3000);