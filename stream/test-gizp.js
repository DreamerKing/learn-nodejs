const fs = require('fs');
const zlib = require('zlib');

const file = process.argv[2];

fs.readFile(file, (err, buf) => {
    if(err) {
       return console.error(err);
    }
    zlib.gzip(buf, (err, buf2) => {
        fs.writeFile(`${file}.gz`, buf2, err => {
            if(err) {
              return console.error(err);
            }
            console.log(file);
            console.log('File successful compressed！');
        })
    })
})