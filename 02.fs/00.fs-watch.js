import {
	watch
} from 'fs';

try {
	watch('./test/world.txt', { encoding: 'utf8' }, (eventType, filename) => {
		if (filename)
			console.log(eventType, filename);
	})
} catch (e) {
	console.log(e.name, e.message);
}

