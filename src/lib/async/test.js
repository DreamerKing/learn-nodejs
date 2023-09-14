import every from 'async/every.js';
import { stat } from 'node:fs/promises';

const fileList = ['a.md', 'b.md', 'c.md'];

/* stat('./a.md').then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});
 */


try {
  const result = await every(fileList, stat);
  console.log(result);
} catch (e) {
  console.error(e)
}