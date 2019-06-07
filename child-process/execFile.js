const cp = require('child_process');
cp.execFile('./hello', ["Hello", "boy!"], function(err, stdout, stderr) {
    if(err) console.error(err);
    console.log('stdout: ', stdout);
    console.log("stderr: ", stderr);
});

