const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 255);
const buf3 = Buffer.allocUnsafe(10)
console.log(buf1);
console.log(buf2);
console.log(buf3);

let test = "Hello王";
console.log(Buffer.byteLength(test, 'utf8'));



