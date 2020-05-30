const path = require('path');

console.log(path.isAbsolute('/foo/bar'));
console.log(path.isAbsolute('qux/'));
console.log(path.isAbsolute('.'));
console.log(path.isAbsolute('\\server'));
console.log(path.isAbsolute('//server'));
console.log(path.isAbsolute('C:/server'));
console.log(path.isAbsolute('C://server'));




