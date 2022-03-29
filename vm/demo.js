import vm from 'vm';

/* const x = 1;

const context = { x: 2 };

vm.createContext(context);

const code = "x += 20; var y = 11";

vm.runInContext(code, context);

console.log(context);

console.log(x);
console.log(y); */

/* 
const script = new vm.Script(`
  function add(a, b) {
      return a + b;
  }

  const x = add(1, 3);
`);

const cacheWithoutX = script.createCachedData();

script.runInThisContext();

const cacheWithX = script.createCachedData();

console.log(x);
 */


/* const context = {
    animal: 'cat',
    count: 2,
};

const script = new vm.Script('count += 1; name = "Kity";');

vm.createContext(context);

for (let i = 0; i < 10; i++) {
    script.runInContext(context);
}

console.log(context); */

const script = new vm.Script('globalVar = "set"');
const contexts = [{}, {}, {}];
contexts.forEach(context => {
    script.runInNewContext(context);
});

console.log(contexts);