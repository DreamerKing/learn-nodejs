const path = require('path');

console.log(path.format({
    root: '/',
    dir: "/home/king",
    base: 'base', // 若提供了base则name,ext无效
    // base: "base.txt",
    name: "index",
    ext: ".html"
}));

console.log(path.format({
    // root: '/',
    dir: "/home/king",
    // base: 'base', // 若提供了base则name,ext无效
    // base: "base.txt",
    name: "index",
    ext: ".html"
}));

