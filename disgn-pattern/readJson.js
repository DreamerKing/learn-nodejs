const fs = require('fs');

function readJson(fileName, callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        let parsed;
        if(err) {
            return callback(err);
        } else {
            // try {
            //  parsed = JSON.parse(data);   
            // } catch (error) {
                // return callback(error);
            // }
        }
        callback(null, JSON.parse(data));
    });
}

readJson('test.json', (err, result) => {
    if(err) {
        console.error(err);
    } else {
        console.log(result)
    }
});

process.on('uncaughtException', (err) => {
    console.error("err:", err);
    process.exit();
});