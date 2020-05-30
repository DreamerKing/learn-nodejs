const b1 = Buffer.from([1, 2, 3]);
const b2 = Buffer.from('海'); // 一个中文字符3个字节
const b3 = Buffer.from('test', 'utf-8');
const b4 = Buffer.from('test', 'latin1');
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

