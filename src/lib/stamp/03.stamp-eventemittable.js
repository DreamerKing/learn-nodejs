import EventEmittable from '@stamp/eventemittable';
import stampit from '@stamp/it';

const MyStamp = stampit({
    methods: {
        foo() {
            this.emit('foo', 'bar');
        }
    }
}).compose(EventEmittable);

const my = new MyStamp();
my.on('foo', value => {
    console.log(`value: ${value}`);
});

my.foo();

