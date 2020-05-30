const path = require('path');

console.log(path.relative('/king/foo/bar', '/king/zpp/baz/foo/index.html'));
console.log(path.relative('C:\\king\\foo\\bar', '\\king\\zpp\\baz\\foo\\index.html'));
