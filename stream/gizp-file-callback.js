import { readFile, writeFile } from 'fs';
import { gzip } from 'zlib'

const fileName = process.argv[2];

readFile(fileName, (err, buf) => {
    if (err) {
        return console.error(err);
    }
    gzip(buf, (err, buf2) => {
        if (err) return console.error(err);
        writeFile(`${fileName}.gz`, buf2, err => {
            if (err) {
                return console.error(err);
            }
            console.log(fileName);
            console.log('File successful compressed！');
        })
    })
})