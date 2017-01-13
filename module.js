function Hello(){
	this.hello = function(){
		console.log("hello!");
	};
	this.world = function(){
		console.log("world!");
	};
}

module.exports = Hello;