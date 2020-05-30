//escape()、encodeURI()、encodeURIComponent()区别详解  https://www.cnblogs.com/moranhuishou/p/6209387.html
const qs = require('querystring');

console.log(qs.escape("a=12&b=朝空"));
console.log(qs.unescape("a%3D12%26b%3D%E6%9C%9D%E7%A9%BA"));
console.log(qs.decode("a=12&b=还我钱"));
let t = {
    a: "King", 
    c: "菜鸡",
    b: [12, "hi"]
};

console.log(qs.encode(t, ":", "*", { encodeURIComponent: "gbkEncodeURIComponent"}));
let eq = "a*King:c*%E8%8F%9C%E9%B8%A1:b*12:b*hi";
console.log(qs.parse(eq, ":", "*"));
