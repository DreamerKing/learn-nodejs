function sumSquire(n){
    let sum = 0;
    for(let m =0; m <=n; m++){
        sum += m*m;
    }
    return sum;
}

console.log(sumSquire(3));
