console.log(process);
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function(text){
    process.stdout.write(text.toUpperCase());
});
