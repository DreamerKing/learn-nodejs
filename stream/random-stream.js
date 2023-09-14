import { Readable } from 'stream';
import Chance from 'chance';

const chance = new Chance();

export default class RandomStream extends Readable {
  constructor(options) {
    console.log('options:', options);
    super(options);
    this.emittedBytes = 0;
  }
  _read(size) {
    const chunk = chance.string({ length: size });
    this.push(chunk, 'utf8');
    this.emittedBytes += chunk.length;
    console.log('_read:', chunk.length, size);
    if (chance.bool({ likelihood: 5 })) {
      const flag = this.push(null);
      console.log('flag:', flag);
    }
  }
}