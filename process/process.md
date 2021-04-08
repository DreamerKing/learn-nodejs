process.argv 脚本参数
提供对运行环境信息的访问
标准流接口,继承自EventEmitter。
1. process.stdio
2. process.stdout
3. process.stderr

对二进制数据的处理 字节流 二进制文件通常是一个八位字节流序列。

ArrayBuffer 浏览器端
Buffer Node端 Uint8Array
Buffer与类型化数组的转换：
1. Buffer内存会复制一份,而不是共享；
2. Buffer被解释成数组而不是字节数组.

Buffer.from()
Buffer.alloc()
Buffer.allocUnsafe()