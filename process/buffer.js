let a = [1, 2, 3];
let b1 = Buffer.from(a);
let b2 = Buffer.alloc(3);
let b3 = Buffer.allocUnsafe(3);
console.log(b1);
console.log(b2);
console.log(b3);
let bj = Buffer.from('This is Buffer');
let j = JSON.stringify(bj);
console.log(j);
let s = Buffer.from(JSON.parse(j).data);
console.log(s.toString());
