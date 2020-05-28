const dns = require("dns");
/* const options = {
    family: 0,
    all: true,
    hints: dns.ADDRCONFIG || dns.V4MAPPED
};

dns.lookup('baidu.com', options, function(err, address, family){
    if(err){
        console.error("Error:", err);
    }
    console.log("Adress: ", address, family);
}) 
 */

dns.resolve('baidu.com','ANY', function(err, records) {
    if(err){
        console.error(err)
    }
    console.log("records:", records);
});
/* 
const Resolver = dns.Resolver;
const resolver = new Resolver();
resolver.setServers(['4.4.4.4']);

resolver.resolve4('baidu.com', (err, address) => {
    console.log(address);
})
console.log(resolver.getServers()); */

/* dns.lookupService('127.0.0.1', 3000, (err, hostname, service) => {
    console.log(hostname, service);
}) */
/* 
dns.resolve4('baidu.com', (err, address) => {
    console.log(address);
}) */
dns.resolveNs('baidu.com', {ttl: true }, (err, address) => {
    console.log(address);
}) 

