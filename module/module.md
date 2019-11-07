# 模块 
导出模块可以用module.exports或exports。
每个模块中都有一个module对象，module是对当前模块的一个引用。module.exports对象是module系统创建的，exports可以看作是对module.exports的一个引用。当模块中引入另外的模块时，以module.exports的值为准，有的情况下module.exports和exports的值会不一样。
为了保持一致，一般用module.exports 导出对象，用exports导出值。
引用模块可以使用require关键字

# 包
包用于管理多个模块及其依赖关系，可以对多个模块进行封装，包的根目录必须包含package.json文件，package.json文件是CommonJS规范用于描述包的文件，符合CommonJS规范的package.json文件一般包含以下字段：

name：包名。必须是唯一的，只能包含小写字母、数字和下划线。
version：包版本号。
description：包说明。
keywords：关键字数组。用于搜索。
homepage：项目主页。
bugs：提交bug的地址。
license：许可证。
maintainers：维护者数组。
contributors：贡献者数组。
repositories：项目仓库托管地址数组。
dependencies：包依赖。

一般可以用`npm init [-y]`来生成package.json文件。

# npm 
```
npm <commond> 
commond:
+ access
+ adduser
+ bin
+ bugs
+ cache 
+ competion 
+ config
+ dedupe
+ deprecate 
+ dist-tag 
+ docs 
+ edit 
+ explore
+ get
+ help-search
+ init
+ install
+ install-test
+ link
+ logout
+ ls
+ outdated
+ ower
+ pack
+ ping
+ prefix
+ prune
+ publish
+ rebuild
+ repo
+ restart
+ root
+ run-script
+ search   
+ set
+ shrinkwrap
+ stars
+ start
+ stop
+ tag
+ team
+ test
+ uninstall
+ unpublish
+ update
+ version
+ view 
+ whoami 

npm -l //列出所有cmd命令的用法
npm <cmd> -h //查看cmd命令用法
npm help <term>  // 查看term命令的帮助文档
npm help npm //查看npm的帮助文档
```

```
npm search [--long] [search terms ...] //搜索包
npm install [-g|--save|--save-dev]  //安装包
npm update package //更新包
npm uninstall package //卸载包
```