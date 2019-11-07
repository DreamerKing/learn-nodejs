# Nodejs概述  
Node.js是基于Google Chrome V8引擎进行封装JavaScript执行环境，主要用于创建快速的、可扩展的网络应用。它采用事件驱动和非阻塞I/O模型，使其变得轻量和高效，非常适合构建运行在分布式设备的数据密集型的实时应用。
# REPL
```
node 
-v, --version  //输出node版本
-e, --eval script //执行js脚本
-p, --print //执行js脚本并输出结果
-c, --check //执行js语法检查
-i, --interactive //交互式
--zero-fill-buffer //自动填充Buffer和SlowBuffer 
```

环境变量
NODE_PATH  //以`;`分隔列出目录
NODE_DISABLE_COLORS //
NODE_ICU_DATA
NODE_REPL_HISTORY

# 模块和包
模块是实现一些功能的函数集合，nodejs以文件的形式来划分模块;而包是具有依赖关系的模块集合，nodejs采用CommonJS规范，CommonJS规范规定，一个js文件就是一个模块，而包是一个文件夹，包中必须包含一个名为package.json文件。一般情况下，包内的bin文件下存放二进制文件，lib文件存放js文件，doc文件夹存放文档文件，test文件夹存放测试文件。

# 包管理工具 
npm 是官方提供的nodejs包管理工具,另外也可以用cnpm来代替npm进行包的管理。
修改下载源仓库地址可以用`--registry`参数指定
```
npm --registry=https://registry.npm.taobao.org
```



[nodejs中文文档](http://nodejs.cn)

