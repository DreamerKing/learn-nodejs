const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const pwd = 'King';
const key = crypto.scryptSync(pwd, 'Dreamer', 24);

const iv = Buffer.alloc(16, 0);

const decipher = crypto.createDecipheriv(algorithm, key, iv);

const encrypted = "83bbd51ff9ff1e9c1e7f9b4b5d162094b4c86c0f03943ea29e68c91d282677484ed7e683e7b59ecc3598ff158d839f5562db47676c670b25293e0b94bdc18a3f";
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
