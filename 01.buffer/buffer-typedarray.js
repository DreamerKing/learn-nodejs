const arr = new Uint16Array(2);
console.log(arr);
arr[0] = 5000;
arr[1] = 4000;

console.log(arr);

const b1 = Buffer.from(arr);
const b2 = Buffer.from(arr.buffer);

console.log(b1);
console.log(b2);

arr[1] = 6000;
console.log(b1);
console.log(b2);
console.log(Buffer);
console.log(Buffer.prototype);

console.log(Uint16Array);
console.log(Uint16Array.prototype);
console.log(arr.buffer);






