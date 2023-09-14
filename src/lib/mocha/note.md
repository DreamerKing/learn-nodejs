安装 mocha

```bash
yarn add mocha -D
```

在根目录下添加配置文件`.mocharc.yml`。

断言库

- should.js
- chai
- expect.js
- better-assert
- unexpected

Hooks

- before()
- after()
- beforeEach()
- afterEach()

排除测试

可以使用 only()控制测试套件或用例的执行，也可使用`--forbid-only`选项来忽略 only()方法控制。
skip()跳过测试。

包含测试

重试测试
retires()

设置超时
可分测试套件、测试用例和 hooks 三个层级分别设置。
timeout()

mocha 命令

```bash
mocha [spec...]
```
