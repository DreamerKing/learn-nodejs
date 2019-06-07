const assert = require('assert');
const CountStream = require('../count-stream');
const fs = require('fs');

const cs = new CountStream('example');

let passed = 0;

cs.on('total', function(count){
    assert.equal(count, 1);
    passed++;
});

fs.createReadStream(__filename).pipe(cs);

process.on('exit', function(){
    console.log('Assertions passed: ', passed);   
});
