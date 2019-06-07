const fs = require('fs');
const https = require('https');

const tls = require('tls');
let options = {
    key: fs.readFileSync('./server.pem'),
    cert: fs.readFileSync('./server-cert.pem'),
    ca: [fs.readFileSync('./client-cert.pem')],
    requestCert: true
};

const server = https.createServer(options, function(req, res){
    let authorized = req.socket.authorized ?
        "authorized": "unauthorized";
    console.log(authorized);
    res.writeHead(200);
    res.write("Hello, You are " + authorized + "\n");
    res.end();
});

server.listen(8000, function(){
    console.log("Server listening!");  
});

