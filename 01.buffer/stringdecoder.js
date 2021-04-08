let { StringDecoder } = require('string_decoder');
let decoder = new StringDecoder('utf8');
let euro = Buffer.from([0xe2, 0x82]);
let euro1 = Buffer.from([0xac]);
console.log(decoder.write(euro));
console.log(decoder.write(euro1));
console.log(euro.toString());
console.log(euro1.toString());

let ru = Buffer.alloc(3, '€', 'utf-8');

console.log(ru.toString());
