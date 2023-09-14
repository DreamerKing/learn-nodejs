import ArgOverProp from "@stamp/arg-over-prop";
import compose  from '@stamp/compose';
const { argOverProp } = ArgOverProp;
/* const StampA = compose({
    properties: {
        foo: 1
    }
}).compose(ArgOverProp).argOverProp('foo'); */

// const StampA = ArgOverProp.argOverProp({ foo: 1 });

const StampA = argOverProp({ foo: 1 });

/* const StampA = compose({
    properties: {
        foo: 1
    },
    initializers: [function (opts) {
        this.foo = opts.foo
    }]
}); */

const instance1 = StampA();
const instance2 = StampA({ foo: 999 });

// console.log(ArgOverProp);
console.log(instance1);
console.log(instance2);
// console.log(StampA);

const HasColor = argOverProp('color', 'background');
const HasPoint = argOverProp({ x: 0, y: 1 });

const ColorPoint = compose(HasColor, HasPoint);

const point = ColorPoint({ color: 'blue', x: 15 });

console.log(point);

