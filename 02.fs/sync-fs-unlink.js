const fs = require('fs');

try {
	fs.unlink('./test/hello.txt');
} catch (err) {
	throw err;
	console.log("删除文件出错！", err);
}
console.log("删除文件成功！");
