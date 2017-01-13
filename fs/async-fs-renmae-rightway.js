/**
  这种方式不能保证代码顺序执行
*/
const fs = require('fs');

//重命名文件
fs.rename('./test/hello', './test/world', (err) => {
	if(err) throw err;
	console.log("重命名完成！");
	//检测文件状态
	fs.stat('./test/world', (err, stats) => {
		if(err) throw err;
		console.log(`stats:${JSON.stringify(stats)}`);
	});
});

