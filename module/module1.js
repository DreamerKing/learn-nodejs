// 函数式写法，引入模块不需要创建对象就可以直接调用
function hello() {
	console.log("hello");
}

function world() {
	console.log("world");
}

exports.hello = hello;
exports.world = world;