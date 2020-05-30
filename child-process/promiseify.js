const util = require('util');
const exec = util.promisify(require('child_process').exec);
const execFile = util.promisify(require('child_process').execFile);


async function lsExec(){
    const { stdout, stderr } = await exec('ls .');
    console.log(stdout);
    console.error(stderr);
}

// lsExec();

async function getVersion(){
    const { stdout } = await execFile('node', ["--version"]);
    console.log(stdout);
}

getVersion();