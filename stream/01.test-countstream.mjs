import CountStream from './01.countstream.mjs';
import http from 'http';
const cs = new CountStream('产品');

http.get('http://www.zgyjyx.com/portal/index.html', function(res){
    res.pipe(cs);
});

cs.on('total', function(count){
    console.log('count', count);
});