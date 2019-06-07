# global对象
gobal对象在所有模块中都可以访问，它主要包含与模块、定时器、CLI等相关的内容。
## 可能存在但非全局变量
下面的这些变量可能存在在global对象中，但它们并不是全局变量。
* __dirname  当前目录路径
* ——filename  当前文件路径
* exports 导出对象，它是module.expots的一个引用
* `module` 当前模块对象, 仅仅存在当前模块中
* require(moduleName)  导入模块方法 

## 全局对象 
* `Buffer`  
* console
* `process`  

## 全局方法   
主要是三类定时器的方法 
1.  * setImmediate(callback [, ...args])  立即调用
    * clearImmediate(immediateObject)

1.  * setInterval(callback, delay[, ...args]) 定时循环调用
    * clearInterval(intervalObject)

1.  * setTimeout(callback, delay[, ...args]) 定时调用
    * clearTimeout(timeoutObject)

## 安装和加载模块
```bash
npm search express
npm search /^express$/  //可以使用`npmsearch`工具代替
npm install express
```
全局模式安装的模块一般放在`/usr/local/lib/node_modules`目录下

```javascript
const express = require('express);
```

## console对象
+ console.log()
+ console.info()
+ console.error()
+ console.warn()
+ console.trace() //堆栈日志
+ console.time() / console.timeEnd() //基准测试  模块:benchmark | microtime 
  
  消息内容通过`util.inspect`格式化,这些格式化通过`util.format`实现。  

    | 占位符 | 类型 |
    |:-----:|:----:|
    | %s | string |
    | %d | number |
    | %j | JSON |

    | 流类型 | 句柄 | |
    |:----:|:---:|:----|
    |stdin| 0 | |
    |stdout| 1 | console.log() <br/> console.info()|
    | stderr | 2 | console.error()<br/> console.warn()|