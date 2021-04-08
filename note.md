# 为什么需要Node?
+ 非阻塞I/O能够最大限度地利用所有I/O资源
+ Web API
+ 网络爬虫
+ TCP/IP服务

# Node的主要特性
+ 标准类库
+ 模块系统
+ npm


process.nextTick()与setImmediate()的区别
process.nextTick()的作用是延迟一个函数执行，直到下一次事件循环。
使用process.nextTick()延迟的回调在任何其他I/O事件触发之前运行，而使用setImmediate(),回调执行将在队列中已有的任何I/O事件后排队。因为process.nextTick()在任何已经调度的I/O之前运行，它可能在某些情况下导致I/O饥饿(如递归调用),而使用setImmediate()则永远不会发生这种情况。

Node回调约定
1. 回调函数置尾  即使存在可选参数，回调函数总是放在最后一个位置。
2. 暴露错误优先,并且错误必修始终为Error类型
3. 传播错误 使用return语句确保回调函数被调用后退出函数
4. 未捕获异常 

module.exports与exports的区别
exports只是module.exports初始值的引用,这样的值本质上是在模块加载之前创建的简单对象字面量。因此我们只能将属性附加到exports变量引用的对象上,给export变量重新赋值没有任何意义，因为它不会改变module.exports的内容。如果要导出除对象字面之外的其他东西,如函数、实例甚至字符串,必须重置module.exports。

require函数是同步的,它使用简单的直接模式返回模块内容，并且不需要回调。因此对module.exports的任何赋值也必修是同步的。

全局对象
1. global


为什么前端开发要掌握Node.js？
Runtime
文件、网络、N-API

BFF
+ SSR
+ Bigpipe、Comet、Socket
+ 合并接口请求
+ 路由定制
+ 数据缓存
  
前端工具


