const t = setTimeout(() => {
    console.log('timeout');
});

t.unref();

setImmediate(() => {
    t.ref();
})