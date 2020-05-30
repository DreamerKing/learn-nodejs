const { Certificate } = require('crypto');

const spkac = "SPKAC=MIICRTCCAS0wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC363L4s/s7R5HFwP/G0fFh4IHn3e2e6dBhz4XUcC2pTbY3GpTo/LNSK8PXohXmPDtGFyDAMtsQnlA4halfzUqAAqcajDrsum7uAAfTDjqSMOhhBB4uyd49waO7qL2Gj1BxNTTYEvi5UYMqXEF4Daj2gtsNNLhIVBGzmA/xH8x2TxkCpyI9lnL2e2xLQtgluCutHgWSaexUNW/aHtlzojC6WJ63T0k6dFvBWsDWwa8gw9xyuEYmH+dovY98mKWymcMwoZdjiEQKTwr23w3giZ8wFheTbl/2+dIwfh9J0HYBh4YQ6n4W1dsHjEMzpxzWRiPwfkb63Ryk5cFNRGdc6k4vAgMBAAEWBWhlbGxvMA0GCSqGSIb3DQEBBAUAA4IBAQBpChYQD0bfZs1gOd8i3/wfcAv6xHbv/zz/1+YdBHxDYeJgKz1DEgiIn2xAaZdnE3Xgk6jgc+er857bfAvAvYsfV+LzaIHY67rQAf+Ke2JSQ0+RMOvAKjYlUffsjKPJycTFq3b2SkzuXLXp2Yf1BZqmXHYZZQfpi2DxH99JLL5NwR32UCW4IjVVl1m1B0ZpGzGMPPVmelqlAV4Ec/HbCkqRCTGDlHoELr54INejUeoiXMSAsGtHAz5UQNzXLRpXNRUSZXWZWRcLTHSQheX9sOegfEs2Vyw0+UczKhv+fDt0UCdeKDoQT4HfSRcJ3HHbsA0r/GpPBtDFVgee5Cfok+tl";
const challenge = Certificate.exportChallenge(spkac);
const publicKey = Certificate.exportPublicKey(spkac);
console.log(challenge.toString('utf8'));
console.log(publicKey);

