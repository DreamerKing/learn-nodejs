其他的加密模块
+ bcrypt
+ scrypt

[openssl spkac](https://www.mkssoftware.com/docs/man1/openssl_spkac.1.asp)
openssl spkac [-in filename] [-out filename] [-key keyfile] [-passin arg] [-challenge string] [-pubkey] [-spkac spkacname] [-spksect section] [-noout] [-verify]

生成Key
```
openssl genrsa -out key.pem 2048
```
生成SPKAC
```
openssl spkac -key key.pem -challenge hello -out spkac.cnf
```
查看SPKAC
```
openssl spkac -in spkac.cnf
```
验证SPKAC
```
openssl spkac -in spkac -noout -verify
```
Class
+ Certificate
  + exportChallenge(spkac)
  + exportPublicKey(spkac [, encoding])
  + verifySpkac(spkac)
+ Cipher
  + 