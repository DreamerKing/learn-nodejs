import { deflate, inflate } from 'zlib';

const database = [[], [], [], [], [], [], [], []];
const bitmasks = [1, 2, 4, 8, 16, 32, 64, 128];

function store(buf, callback) {
    const db = buf[0];
    const key = buf.readUint8(1);
    if (buf[2] === 0x78) {
        inflate(buf.slice(2), (err, inflatedBuf) => {
            const data = inflatedBuf.toString();
            bitmasks.forEach((bitmask, index) => {
                if ((db & bitmask) == bitmask) {
                    database[index][key] = data;
                }
            });
            callback && callback()
        });

    }
}

const header = Buffer.alloc(2);
header[0] = 8;
header[1] = 0;

deflate('King', (err, deflatedBuf) => {
    const message = Buffer.concat([header, deflatedBuf]);
    store(message, () => {
        console.log(database);
    });
});
