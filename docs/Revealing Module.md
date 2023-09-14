# Revealing Module

提供了一种创建模块的方式，使得模块的私有函数和变量对外不可见，同时通过公共接口暴露可访问的函数和变量。通过这种方式,模块的内部实现细节得以隐藏，而公共接口则提供了一种良好的抽象层，使得模块可以被更好地维护和重用。

```js
const myModule = (function () {
  let privateVar = "Hello World";

  function privateFn() {
    console.log(privateVar);
  }
  const publicVar = "I am a public variable";

  function publicFn() {
    privateFn();
  }

  return {
    publicVar,
    publicFn,
  };
})();

myModule.publicFn();
console.log(myModule.publicVar);
```
