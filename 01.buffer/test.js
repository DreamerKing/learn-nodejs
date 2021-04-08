// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(10,1);
// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf1, buf2, buf3);
const buf4 = Buffer.from([1,2,3]);
console.log(buf4);
const buf5 = Buffer.from(buf4,1, 1);
console.log(buf5);
/*const buf5 = Buffer.from("test");
console.log(buf5,buf5.toString());
const buf6 = Buffer.from('test',"utf8");
console.log(buf6);*/