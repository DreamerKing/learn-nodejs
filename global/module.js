const myClass = require("./myclass.js");
const myClass2 = require("./myclass2.js");

console.log(myClass.method());
console.log(myClass2.method());
console.log(require.resolve("./myclass.js"));

//let isDeleted = delete require.cache(require.resolve("./myclass.js"));
//console.log(isDeleted);
//console.log(myClass.method());

//模块一旦被加载了就被缓存了，多次加载将返回同一个对象
