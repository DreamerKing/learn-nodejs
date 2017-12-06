// console.log(global,"global");
/*console.log(__dirname);
console.log(__filename);
console.log(exports, "exports");
console.log(module, "module");
console.log(Buffer, "buffer");
console.log(process,"process");
console.log(console,"console");*/
console.time("time");
function test(name){
	console.log("Test:",name);
}

// 立即调用定时器
setImmediate(test, "King");

console.timeEnd("time");
console.time("t");
// 定时循环调用定时器
var interTime = setInterval(test, 2000, "Dreamer");
console.timeEnd("t");

console.log(interTime, "interTime");