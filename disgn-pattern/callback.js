/* 
// 同步函数 使用return指令将结果传递给调用者 直接风格
function add(a, b) {
    return a + b;
} 
*/

/* 
同步CPS(Continuation Passing Style)
// 回调作为一个参数传递给另外一个函数,当操作完成时将调用该结果。
// 它只表示通过将结果传递给另一个函数(回调)而使结果传播,而不是直接返回给调用者。
function add(a, b, callback) {
    callback(a + b);
}
 */

 // 异步CPS
 // 由于settimeout()触发异步操作,它不会等待执行回调,而是立即返回,将控制权返回给add(),再返回到调用者。
 // 在Node中回调的特性非常重要,因为它会在发送异步操作请求后立即将控制权返回给事件循环,以处理来自队列的新事件。
function add(a, b, callback) {
    setTimeout(() => callback(a + b), 0);
}


console.log("before");
add(1, 2, (sum) => console.log(`result: %d`, sum));
console.log("after");