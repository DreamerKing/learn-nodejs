var args = {
    '-h': displayHelp,
    "-r": readFile
};

function displayHelp(){
    console.log("Argument processor:", args ); 
}

function readFile(file){
    if(file && file.length){
        console.log("Reading:", file);
        console.time('read');
        var stream = require("fs").createReadStream(file);
        stream.on("end", function(){
            console.timeEnd('read');
        });
        stream.pipe(process.stdout);
    }else{
        console.error('A file must be provided with the -r option');
        process.exit()
    }
}

if(process.argv.length > 0){
   // console.log(process.argv[process.argv.length - 1]);
    args[process.argv[2]].apply(this, process.argv.slice(2));
//     process.argv.forEach(function(arg, index){
//     console.log(arg);
//     console.log(process.argv.slice(index + 1));
//     //args[arg].apply(this, process.argv.slice(index + 1));
// })
}

// 参数解析模块  optimst | commander
