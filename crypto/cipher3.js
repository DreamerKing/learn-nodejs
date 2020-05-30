const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const pwd = 'King';

const key = crypto.scryptSync(pwd, 'Dreamer', 24);

const iv = Buffer.alloc(16, 0);
const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update("重要指示:请清除内奸,今晚8点行动！", 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
