/* // alloc(size [, fill [, encoding]])
// allocUnsafe(size)
// allocUnsafeSlow(size)

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 255);
const buf3 = Buffer.allocUnsafe(10)
console.log(buf1);
console.log(buf2);
console.log(buf3);

// byteLength(size [, encoding])
let test = "Hello王";
console.log(Buffer.byteLength(test, 'utf8')); */
// 每位不能存储超过2**16的数
/* const b = Buffer.from([-1, 2.6, -0, 65535]);
console.log(b); */

/* const b = Buffer.from([257, 257.5, -255, '1']);
console.log(b); */

/* 
const buf6 = Buffer.from('tést');
console.log(buf6); */

const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6);




