const CountStream = require('../count-stream');
const http = require('http');

let cs = new CountStream('卡');

http.get('http://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_1344221690338130098%22%7D&n_type=0&p_from=1', function(res){
    res.pipe(cs);
});

cs.on("total", function(count){
    console.log('Total matches: ', count);  
})


