const path = require('path');

console.log(path.basename("D:\\Learn\\learn-css\\example\\front-color\\index.html"));
console.log(path.basename("D:\\Learn\\learn-css\\example\\front-color\\index.html", ".html"));
console.log(path.posix.basename("D:\\Learn\\learn-css\\example\\front-color\\index.html", ".html"));
console.log(path.win32.basename("D:\\Learn\\learn-css\\example\\front-color\\index.html", ".html"));
console.log(path.basename("D:\\Learn\\learn-css\\example\\front-color\\index.html", ".txt"));
console.log(path.win32.basename("D:\\Learn\\learn-css\\example\\front-color\\index.html", "tml"));
