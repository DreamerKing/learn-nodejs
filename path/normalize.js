const path = require('path');

console.log(path.normalize('/for//bar///baz'));
console.log(path.normalize('D:\\\\temp\\foo////fun\\index.html'));
console.log(path.normalize('/for//bar///baz/.././index.txt'));

