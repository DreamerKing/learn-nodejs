import util, { callbackify, debuglog, debug, deprecate, inspect } from 'util';
/* 
async function hello() {
    return "Hello, world!";
}

const callbackHello = callbackify(hello);

callbackHello((err, hello) => {
    console.log(hello);
}) */
/* 
function fn() {
    Promise.reject(null);
}

const callbackFn = callbackify(fn);

callbackFn((err, result) => {
    console.log(err && err.hasOwnProperty('reason') && err.reason === null);
}) */

/* const dlg = debuglog('foo');
if (dlg.enabled) {
    console.log('debug');
}
dlg('hello form foo [%d]', 123);

const dg = debug("debug");
dg('hello');
 */

/* 
function add(a, b) {
    return a + b;
}

const willdreprecateAdd = deprecate(add, 'add will deprecate. use add2() instead');

const sum = willdreprecateAdd(2, 3);
console.log(sum); */

/* class Foo {
    get [Symbol.toString]() {
        return 'bar';
    }
}

class Bar { };

const baz = Object.create(null, { [Symbol.toStringTag]: { value: "foo" } });

inspect(baz)

console.log(inspect(new Foo()));
console.log(inspect(new Bar()));
console.log(inspect(baz));

console.log(inspect(util, { showHidden: true, depth: null })); */

const ninspect = Symbol.for('nodejs.util.inspect.custom');

class Password {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return 'xxxxxxxxx';
    }
    [ninspect]() {
        return `Password <${this.toString()}>`;
    }
}

const passwd = new Password('ddsaaa');
console.log(passwd);






