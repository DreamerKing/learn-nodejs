const fs = require('fs');

fs.watch('./test/world', {encoding: 'utf8'}, (eventType, filename) => {
	if(filename)
		console.log(eventType,filename);
})