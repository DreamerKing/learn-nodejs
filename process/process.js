// console.log(process.env);
// console.log(process.argv);

/* process.on('exit', function(code){
    setTimeout(() => {
        console.log("exit code:", code);
    }, 0);
});

process.on('beforeExit', function(code){
    console.log("beforeExit code: ", code);  
});

process.on('message', function(message){
    console.log("message:", message); 
}); */

process.on('multipleResolves', (type, promise, reason) => {
    console.error(type, promise, reason);
    setImmediate(() => process.exit(1));
});

async function main() {
    try {
        return await new Promise((resolve, reject) => {
            resolve('First call');
            resolve('Swallowed resolve');
            reject(new Error("Swallowed reject"));
        })
    } catch {
        throw new Erorr("Faild");
    }
}

main().then(console.log);