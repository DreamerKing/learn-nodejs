var http = require('http');
var events = require('events');
var server = http.createServer();

/*server.on('request', function(req,res){
	res.writeHeader(200,{'Content-Type':'text/plain'});
	res.write("Dreamer King");
	console.log("test");
	res.end();
});
server.listen(1337,'127.0.0.1');
console.log("server runing at http://127.0.0.1:1337");*/

/*//只执行一次的监听器
server.once('request',function(req,res){
	res.writeHeader(200,{'Content-Type':'text/plain'});
	res.write("Dreamer King");
	console.log("test");
	res.end();
});
server.listen(1337,'127.0.0.1');
console.log("server runing at http://127.0.0.1:1337");
*/

/*function callback(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello world");
	console.log("Hello World");
	res.end();
}
server.on('request',callback);
// server.removeListener('request',callback);
// server.on('request',function(req,res){
// 	res.writeHead(200,{"Content-Type":"text/plain"});
// 	res.write('Dreamer King');
// 	console.log("test removeListener");
// 	res.end();
// });

server.listen(1337,"127.0.0.1");
console.log("server runing at http://127.0.0.1:1337");
*/

/*server.on('request',function(req, res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello world1");
	console.log("Hello World1");
	// res.end();
});

server.on('request',function(req, res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello world2");
	console.log("Hello World2");
	// res.end();
});

// server.removeAllListeners('request');

server.on('request',function(req, res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello world");
	console.log("Hello World!");
	res.end();
});
server.listen(1337,"127.0.0.1");
console.log("server runing at http://127.0.0.1:1337");*/

server.on("myevt",function(msg){
	console.log(msg);
});

server.emit('myevt','DreamerKing');
server.on('request',function(req, res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello world");
	console.log("Hello World!");
	res.end();
});

server.listen(1337,"127.0.0.1");
console.log("server runing at http://127.0.0.1:1337");

var num = events.EventEmitter.listenerCount(server,'myevt');
console.log(num);