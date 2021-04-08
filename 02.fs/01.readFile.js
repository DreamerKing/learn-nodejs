const { readFile } = require('fs/promises');

(async function() {
    try {
        const readFileHandle = await readFile('fs.md'); 
        console.log(readFileHandle.toString());
    } catch (error) {
        
    }
})()





