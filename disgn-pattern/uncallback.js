const fs = require('fs');
const cache = {};
function inconsistenRead(fileName, callback) {
    if(cache[fileName]) {
        // callback(cache[fileName]);
        //延迟执行
        process.nextTick(() => callback(cache[fileName]));
    } else {
        fs.readFile(fileName, 'utf8', (err, data) => {
            cache[fileName] = data;
            callback(data);
        });
    }
}


function createFileReader(fileName) {
    const listeners = [];
    inconsistenRead(fileName, (data) => {
        listeners.forEach(listener => listener(data));
    });
    return {
        onDataReady: listener => listeners.push(listener)
    }
}

const reader1 = createFileReader('text.txt');
reader1.onDataReady(data => {
    console.log('reader1: ', data);
    // 下面代码会执行不到
    const reader2 = createFileReader('text.txt');
    reader2.onDataReady(data => console.log('reader2: ', data));
});

// https://blog.izs.me/2013/08/designing-apis-for-asynchrony

