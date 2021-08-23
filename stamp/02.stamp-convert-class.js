import covertClass from '@stamp/convert-class';

class CParent {
    constructor(arg1) {
        this.parentProp = arg1;
    }
    commonMethod() {
        return 'common parent';
    }
    parentMethod() {
        return 'parent method';
    }
    static commonStaticMethod() {
        return 'common static method';
    }
    static parentStaticMethod() {
        return 'parent static method';
    }
}

class CChild extends CParent {
    constructor(arg1, arg2) {
        super(arg1);
        this.childProp = arg2;
    }

    commonMethod() {
        return super.commonMethod();
    }

    childMethod() {
        return 'child method';
    }

    static commonStaticMethod() {
        return super.commonStaticMethod();
    }

    static childStaticMethod() {
        return 'child static method';
    }
}

let p = new CParent('parent');
let c = new CChild('cparent', 'child');

const Stamp = covertClass(CChild);
// 将父级原型和子级原型方法都放到compose.methods中，方法同名取子级的方法

/* console.log(Stamp.compose.methods.parentMethod === CParent.prototype.parentMethod);
console.log(Stamp.compose.methods.childMethod === CChild.prototype.childMethod);
console.log(Stamp.compose.methods.commonMethod === CChild.prototype.commonMethod);
console.log(Stamp.compose.methods.commonMethod === CParent.prototype.commonMethod); */

// 将父级和子级静态方法都转移到Stamp上，同名用子级的
/* console.log(Stamp.parentStaticMethod === CParent.parentStaticMethod);
console.log(Stamp.childStaticMethod === CChild.childStaticMethod);
console.log(Stamp.commonStaticMethod === CChild.commonStaticMethod);
console.log(Stamp.commonStaticMethod === CParent.commonStaticMethod); */

Stamp().commonMethod() === (new CChild()).commonMethod() === 'common parent'

console.log(Stamp().commonMethod());
console.log(new CChild().commonMethod());

console.log(Stamp.commonStaticMethod());
console.log(CChild.commonStaticMethod());
/* console.log(p);
console.log(CParent);
console.log(c);
console.log(CChild); */
console.log(Stamp);