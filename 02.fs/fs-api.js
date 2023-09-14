import { unlink, open, access, appendFile } from 'node:fs/promises';

/* try {
	await unlink('./test/word.txt');
	console.log("删除文件成功！");
} catch (err) {
	console.error(err.message);
} */

// 删除文件 unlink
// fsPromises.open(path, flags[, mode])
// let fileHandle;

try {

	// fileHandle = await open('./test/word.txt', 'w');
	// console.log(fileHandle, 'file')
	// await fileHandle.writeFile('ff xxxx', { encoding: 'utf8' });
	// await fileHandle.appendFile('test add file data 777');
	// await fileHandle.chmod(764);
	// await fileHandle.chown('dreamer', 'king')
	// const content = await fileHandle.readFile({ encoding: 'utf8' });
	await access('./test/word.txt', 1);
} catch (e) {
	console.error(e)
} finally {
	// await fileHandle?.close();
}