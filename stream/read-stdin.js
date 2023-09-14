process.stdin.setEncoding('utf8')
  .on('readable', () => {
    let chunk = '';
    console.log('New data available');
    while ((chunk = process.stdin.read()) !== null) {
      console.log('chunk', chunk);
      // console.log(`chunk: ${chunk.toString()}`);
    }
  }).on('end', () => {
    console.log(`End of stream`);
  });

// cat http-fs.js | node read-stdin.js