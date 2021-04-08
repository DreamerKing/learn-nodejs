function loadModule(fileName, module, require) {
    const wrappedSrc = `(function(module, exports, require) {
        ${fs.readFileSync(fileName, 'utf8')}
    })(module, module.exports, require);`
    eval(wrappedSrc);
}

const require = (moduleName) => {
    console.log(`Require invoked for module: ${moduleName}`);
    const id = require.resolve(moduleName);
    if(require.cache[id]){
        return require.cache[id].exports;
    } 
    const module = {
        exports: {},
        id
    };
    require.cache[id] = module;
    loadModule(id, module, require);
    return module.exports;
};

require.cache = {};
require.resolve = (moduleName) => {
    
}

