# global对象
gobal对象在所有模块中都可以访问，它主要包含与模块、定时器、CLI等相关的内容。
## 可能存在但非全局变量
下面的这些变量可能存在在global对象中，但它们并不是全局变量。
* __dirname  当前目录路径
* ——filename  当前文件路径
* exports 导出对象，它是module.expots的一个引用
* module 当前模块对象
* require(moduleName)  导入模块方法 

## 全局对象 
* Buffer  
* console
* process 

### 全局方法
1.  * setImmediate(callback [, ...args])  立即调用
    * clearImmediate(immediateObject)

1.  * setInterval(callback, delay[, ...args]) 定时循环调用
    * clearInterval(intervalObject)

1.  * setTimeout(callback, delay[, ...args]) 定时调用
    * clearTimeout(timeoutObject)