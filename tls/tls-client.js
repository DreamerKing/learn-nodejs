const fs = require('fs');
const tls = require('tls');
const os = require('os');

let options = {
    key: fs.readFileSync('./client.pem'),
    cert: fs.readFileSync('./client-cert.pem'),
    ca: [fs.readFileSync('./server-cert.pem')],
    servername: os.hostname()
};

const cts = tls.connect(8000, options, function(){
    let authorized = cts.authorized ?
        "authorized": "unauthorized";
    console.log("connected:", authorized);
    process.stdin.pipe(cts);
});

cts.setEncoding("utf8");
 

cts.on("data", function(data){
    console.log(data);  
});

