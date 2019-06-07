function MyClass() { 
}

MyClass.prototype = {
    method: function(){
        return "Hello";
    }
}

const myClass = new MyClass(); //对象可以和其他对象、方法和属性一起导出来
module.exports = myClass;

