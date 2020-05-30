const crypto = require('crypto');

function hash(name, pwd) {
    crypto.randomBytes(32, (err, salt) => {
        crypto.pbkdf2(pwd, salt, 10000, 64, 'sha512', (err, derivedKey) => {
            console.log(derivedKey.toString('hex'));
        });
    })
}

console.log(hash("King", "23435"));


