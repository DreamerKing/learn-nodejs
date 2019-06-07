// 函数默认参数,不传或者传undefined时使用默认参数
function basic(a = 1, b =2) {
    return a === 3 && b === 2;
}

console.log(basic(3))
console.log(basic(3,undefined))

// 默认参数可以引用它之前的参数
function referPrevParams(a, b = a){
    return b == 3;
}

console.log(referPrevParams(3));
// 默认参数不能引用在它后面声明的参数
function referPrevParams2(a = b, b){
    return a === 3;
}

// console.log(referPrevParams2(undefined, 3));

function argumentsInteraction(a = "a", b = "b", c = "c"){
    return arguments.length == 2 && arguments[0] == "a" && arguments[1] == 'd'; 
}

console.log(argumentsInteraction('a', 'd'))


function temporalDeadZone(x = 1) {
    try {
        eval("(function(a = a) {}())");
        return false;
    } catch (e) { }

    try {
        eval("(function (a = b, b) {} ())");
        return false;
    } catch (e) {
        return true;
    }
}

console.log(temporalDeadZone(), "dead zone");

function separateScope(a = function() {
    return typeof b === 'undefined';
}) {
    var b = 1;
    return a();
}

console.log(separateScope());


function createFn() {
    return new Function("a = 1", "b = 2", "return a === 3 && b ===2;")(3);
}

console.log(createFn(), "new Function")