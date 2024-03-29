import { readFile } from 'fs';

setImmediate(() => console.log(1));
Promise.resolve().then(() => console.log(2));
process.nextTick(() => console.log(3));
readFile('./test.js', () => {
  console.log(4)
  setTimeout(() => console.log(5));
  setImmediate(() => console.log(6));
  process.nextTick(() => console.log(7));
});
console.log(8)

// 1 轮询
// () => console.log(7)

/*
 () => {
  console.log(4)
  setTimeout(() => console.log(5));
  setImmediate(() => console.log(6));
  process.nextTick(() => console.log(7));
}
*/

// 2 检查
// () => console.log(6)

// 3 关闭


// 4 定时器
// () => console.log(5)

// 5 挂起

// 8 2 3 1 4 7 6 5
// 