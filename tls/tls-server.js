const fs = require('fs');
const tls = require('tls');
let options = {
    key: fs.readFileSync('./server.pem'),
    cert: fs.readFileSync('./server-cert.pem'),
    ca: fs.readFileSync('./client-cert.pem'),
    requestCert: true
};

const server = tls.createServer(options, function(cts){
    let authorized = cts.authorized ?
        "authorized": "unauthorized";
    console.log(authorized);
    cts.write('Welcome!\n');
    cts.setEncoding('utf8');
    cts.pipe(cts); 
});

server.listen(8000, function(){
    console.log("Server listening!");  
});

