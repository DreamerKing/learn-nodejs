let bar;

function asyncCall(cb) {
    process.nextTick(cb);
}

asyncCall(() => {
    console.log(bar);
});

bar = 1;