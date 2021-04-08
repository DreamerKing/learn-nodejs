// data URIs
// data:[MIME-type][;charset=<encoding>][;base64],data
var fs = require('fs');
var mime = 'image/png';
var encoding = "base64";
var data = fs.readFileSync("./mv.jpeg").toString(encoding);
var uri = 'data:'+mime+';'+encoding+","+data;
var data2 = uri.split(',')[1];
var buf = Buffer.from(data2, "base64");
fs.writeFileSync('./mv2.png', buf);
console.log(uri);
