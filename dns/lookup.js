const dns = require("dns");
/* 
dns.lookup('www.baidu.com', function(err, address){
    if(err){
        console.error("Error:", err);
    }
    console.log("Adress: ", address);
}) 
*/

dns.resolve('www.baidu.com', function(err, address){
    if(err){
        console.error(err)
    }
    console.log("Address:", address);
});