//函数对象式的写法 引入模块时需要创建实例对象
function Hello() {
	this.hello = function() {
		console.log("hello");
	};
	this.world = function() {
		console.log("world");
	};
}

module.exports = Hello;