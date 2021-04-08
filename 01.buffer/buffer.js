/* var buf = new Buffer(255);
buf[0] = 23;
console.log(buf); */
/* 
var fs = require("fs");
fs.readFile("./name.txt", function(err, buf){
    console.log(Buffer.isBuffer(buf)); 
   // console.log(text.toString()); // 默认转换utf8字符串
   console.log(buf.toString('ascii'));
})
 */

var user = 'johny';
var pass = 'c-bad';
var authstring = user + ":" + pass;
var buf = new Buffer(authstring, "base64");
console.log(buf.toString("base64"));




