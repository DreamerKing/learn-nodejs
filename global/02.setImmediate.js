console.log('before immediate');

const im = setImmediate((arg) => {
    console.log('immediate', arg);
}, 'now');

clearImmediate(im);
console.log('after immediate');
