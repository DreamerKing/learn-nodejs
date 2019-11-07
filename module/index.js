var hello = require('./hello-world-module'); //引入模块
var Hello = require('./module2');
hello.hello(); // >> hello
var world = new Hello();
world.world(); // >> world
world.hello(); // >> hello
