process.stdin.setEncoding('utf8')
  .on('data', (chunk) => {
    console.log('New data available');
    process.stdin.pause();
    console.log('chunk', chunk);
  })
  .on('readable', () => {
    let chunk = '';
    while ((chunk = process.stdin.read()) !== null) {
      console.log('chunk2:', chunk);
    }
  })
  .on('end', () => {
    console.log(`End of stream`);
  });

// cat http-fs.js | node read-stdin.js