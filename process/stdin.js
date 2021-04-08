process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let input = process.stdin.read();
    if(input) {
        process.stdout.write(input);
    }
});