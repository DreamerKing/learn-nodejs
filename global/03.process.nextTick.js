
setImmediate(() => {
    console.log('immediate');
})

setTimeout(() => {
    console.log('timeout');
}, 0);

console.log('before');
process.nextTick(() => {
    console.log('nextTick');
});
console.log('after');