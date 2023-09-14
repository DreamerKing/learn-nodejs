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
    publicFn
  };
})();

myModule.publicFn();
console.log(myModule.publicVar);