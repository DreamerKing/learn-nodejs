const CountStream = require('./write-count');
const http = require('http');
let cs = new CountStream('React');


http.get("http://react.docschina.org/", function(res) {
  res.pipe(cs);
});

cs.on('total', function(count){
    console.log('Total matches: ', count);
});