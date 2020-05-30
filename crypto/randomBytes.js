const crypto = require('crypto');

crypto.randomBytes(32, (err, salt) => {
    console.log(salt.toString('hex'));
});