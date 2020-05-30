const path = require('path');

console.log(path.parse('https://nodejs.org/dist/latest-v12.x/docs/api/path.html'));
console.log(path.parse('/home/user/foo/file.txt'));
console.log(path.parse('C:\\home/user/foo/file.txt'));
console.log("->", path.parse('C:\\\\home\\user/foo/file.txt'));
