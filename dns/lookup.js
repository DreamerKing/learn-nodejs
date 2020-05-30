const dns = require("dns");
const { Resolver } = dns; 

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

/* dns.lookup('www.baidu.com', { all: true, hisnts: dns.ADDRCONFIG | dns.V4MAPPED, verbatim: true }, (err, info) =>{
    if(err){
        console.error("Error:", err);
    }
    console.dir(info);
})  */

/* 
dns.resolve4('www.baidu.com', function(err, address){
    if(err){
        console.error(err)
    }
    address.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if(err) {
                throw err;
            }
            console.dir(hostnames)
        });
    });
    console.dir(address);
}); */

/* const resolver = new Resolver();
resolver.setServers(['4.4.4.4']);

console.log(resolver.getServers()); */

/* resolver.resolve('www.baidu.com', (err, address) => {
    console.log(address);
}); */

/* 
dns.lookupService('127.0.0.1', 443, (err, hostname, service) => {
    if(err) {
        console.error(err)
    }
    console.log(hostname, service);
} ) */

/* dns.resolve('nodejs.org', "TXT", (err, result) => {
    console.log(result);
}) */

/* dns.resolveAny('nodejs.org', (err, result) => {
    console.log(result);
}) */

dns.reverse('39.156.69.79', (err, result) => {
    console.error(err)
    console.log(result);
})
