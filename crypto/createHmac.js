const crypto = require('crypto');
const secret = "King";

const hash = crypto.createHmac('sha256', secret)
                    .update('Dreamer23')
                    .digest('hex')
    console.log(hash);
                    