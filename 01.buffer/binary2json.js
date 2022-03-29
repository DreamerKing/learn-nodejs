import { readFile, writeFile } from 'fs/promises';
const buf = await readFile('./world.dbf');
// console.log(result.toString('ascii'));
const header = {};
const date = new Date();
date.setUTCFullYear(1900 + buf[1]);
date.setUTCMonth(buf[2]);
date.setUTCDate(buf[3]);

header.lastUpdated = date.toUTCString();
header.totalRecords = buf.readUInt32LE(4);
header.bytesInHeader = buf.readUInt16LE(8);
header.bytesPerRecord = buf.readUInt16LE(10);

const FILED_TYPES = {
    C: "Character",
    N: 'Numeric'
};
const fields = [];
let fieldOffset = 32;
let fieldTerminator = 0x0d;

while (buf[fieldOffset] != fieldTerminator) {
    const fieldBuf = buf.slice(fieldOffset, fieldOffset + 32);
    const field = {};
    field.name = fieldBuf.toString('ascii', 0, 11).replace(/\u0000/g, '');
    field.type = FILED_TYPES[fieldBuf.toString('ascii', 11, 12)];
    field.length = fieldBuf[16];
    fields.push(field);
    fieldOffset += 32;
}

const records = [];
for (let i = 0; i < header.totalRecords; i++) {
    const record = {};
    let recordOffset = header.bytesInHeader + (i * header.bytesPerRecord);
    record._isDel = buf.readUint8(recordOffset) == 0x2a;
    recordOffset++;
    for (let j = 0; j < fields.length; j++) {
        const field = fields[j];
        if (field.type == 'Numeric') {
            record[field.name] = Number(buf.toString('ascii', recordOffset, recordOffset + field.length));
        } else {
            record[field.name] = String(buf.toString('ascii', recordOffset, recordOffset + field.length)).trim();
        }
        recordOffset += field.length;
    }
    records.push(record);
}

await writeFile('./world.json', JSON.stringify({ header, fields, records }, null, 2));
