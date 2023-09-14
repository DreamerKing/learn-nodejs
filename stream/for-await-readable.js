for await (const chunk of process.stdin) {
  console.log('new data available');
  console.log('chunk: ' + chunk);
}

console.log('end of stream.');