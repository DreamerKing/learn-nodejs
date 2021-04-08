setTimeout(() => {
    module.exports = () => console.log("async module");
}, 0);

// exports.log2 = () => console.log("sync module");