function direct(){
    "use strict";
    return ( function f(n) {
        if(n < 0) {
            return 'foo';
        } else {
            return f(n -1);
        }
    }(1e5)) == 'foo';
}

console.log(direct())