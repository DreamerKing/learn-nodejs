# 模块系统

## 模块

导出模块可以用 module.exports 或 exports。
每个模块中都有一个 module 对象，module 是对当前模块的一个引用。module.exports 对象是 module 系统创建的，exports 可以看作是对 module.exports 的一个引用。当模块中引入另外的模块时，以 module.exports 的值为准，有的情况下 module.exports 和 exports 的值会不一样。
为了保持一致，一般用 module.exports 导出对象，用 exports 导出值。
引用模块可以使用 require 关键字

## 包

包用于管理多个模块及其依赖关系，可以对多个模块进行封装，包的根目录必须包含 package.json 文件，package.json 文件是 CommonJS 规范用于描述包的文件，符合 CommonJS 规范的 package.json 文件一般包含以下字段：

name：包名。必须是唯一的，只能包含小写字母、数字和下划线。
version：包版本号。
description：包说明。
keywords：关键字数组。用于搜索。
homepage：项目主页。
bugs：提交 bug 的地址。
license：许可证。
maintainers：维护者数组。
contributors：贡献者数组。
repositories：项目仓库托管地址数组。
dependencies：包依赖。

一般可以用`npm init [-y]`来生成 package.json 文件。

## npm

```zsh
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

```zsh
npm search [--long] [search terms ...] //搜索包
npm install [-g|--save|--save-dev]  //安装包
npm update package //更新包
npm uninstall package //卸载包
```

module 对象在所有 Node 应用中都存在，但是每个 module 对象只存在于它的当前模块中。

require module exports

## ESM 的启用方式

- 使用`.mjs`扩展名
- 在 package.json 中配置`type: module`
- 在 cli 中使用选择`--input-type = module`

package.json 中的`exports`字段定义模块导出的内容

使用 import 关键字解析相对或绝对说明符时，必须提供文件扩展名。

支持`file:`, `node:`, and `data:`文件协议
`url.pathToFileURL`

CommonJS 模块导出模式

- 命名导出 将要导出的内容作为`exports`或`moudle.exports`的属性暴露出来；
- 导出函数 (substack 模式) 将`moudle.exports`整个指向一个函数，作为模块的唯一入口，在该入口下扩充一些次要的或高级的属性。体现了小接触面，单一职责的原则。
- 导出类 与导出函数类似
- 导出实例 利用 require()函数的缓存，将实例状态缓存起来，在同一模块之间实现共享。(仅在同一模块)
- 补丁模式 无导出，执行模块代码修改或扩展全局对象或其他已加载模块，容易引发副作用，不太好预测，慎用。
