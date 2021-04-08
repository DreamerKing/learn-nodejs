const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');

console.log([buf1, buf2].sort(Buffer.compare));

let totalLen = buf1.length + buf2.length;

const buf = Buffer.concat([buf1, buf2], totalLen);
console.log(buf);
