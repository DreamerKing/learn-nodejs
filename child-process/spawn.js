const cp = require('child_process');
const c = cp.spawn('echo', ["hello", "king"]);
const ls = cp.spawn('ls', ['-lh', './']);
c.on('error', console.error);

c.stdout.pipe(process.stdout);
c.stderr.pipe(process.stderr);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
})

