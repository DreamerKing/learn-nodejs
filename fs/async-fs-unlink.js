const fs = require('fs');

fs.unlink(__dirname + '/test/hello.txt', (err) => {
	if (err) throw err;
	console.log("删除文件hello.txt成功！");
});