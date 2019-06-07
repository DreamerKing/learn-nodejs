which openssl

openssl genrsa -out server.pem 1024  // 创建服务端私钥
openssl req -new  -key server.pem -out server-csr.pem // 创建CSR
openssl x509 -req -in server-csr.pem -signkey server.pem -out server-cert.pem // 签发服务端私钥

openssl genrsa -out client.pem 1024
openssl req -new -key client.pem -out client-csr.pem
openssl x509 -req -in client-csr.pem -signkey client.pem -out client-cert.pem

openssl s_client -connect 127.0.0.1:8000 -CAfile ./server-cert.pem

注意：创建CSR时提示输入的Common Name是计算机名,可以通过hostname查到。