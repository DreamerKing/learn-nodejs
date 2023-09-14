/*
// module.exports和exports相同的情况
var m = {}; //m表示module对象
var e = m.e = {}; //e表示exports, m.e表示module.exports 
m.e.a = 5;
e.b = 6;
console.log(m.e);
console.log(e);
*/
//module.exports和exports不同的情况
var m = {}; //表示module
var e = m.e = {};
m.e = {c:9}; //引用发生改变，指向新的对象
m.e.f = 11;
e.d = 10;
e.f = 12;
console.log(m.e);
console.log(e);

console.log(module, "module");
console.log(exports, "exports");
console.log(require, "require");

console.log(require.resolve('./module.js'));
console.log(require.cache, "require.cache");
delete require.cache[require.resolve("./module.js")];
console.log(require.cache, "require.cache");


