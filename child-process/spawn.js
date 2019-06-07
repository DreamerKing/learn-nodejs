const cp = require('child_process');
const c = cp.spawn('echo', ["hello", "king"]);
c.on('error', console.error);

c.stdout.pipe(process.stdout);
c.stderr.pipe(process.stderr);

