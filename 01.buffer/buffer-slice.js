let b1 = Buffer.from('This is Buffer');
let b2 = b1.slice(8, b1.length);
b2.fill('*');
console.log(b2.toString());
console.log(b1.toString());

