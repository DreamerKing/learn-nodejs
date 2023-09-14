import assert from 'assert';
import { describe, it } from 'mocha';
import add from '../for-test/add.js';


const tests = await new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, [
    { args: [1, 2], expected: 3 },
    { args: [1, 2, 3], expected: 6 },
    { args: [1, 2, 3, 4], expected: 10 }
  ])
})

describe('add()', function () {
  this.slow(600);
  const testAdd = ({ args, expected }) => function () {
    const res = add(...args);
    assert.strictEqual(res, expected);
  };

  tests.forEach(({ args, expected }) => {
    it(`correctly adds ${args.length} args`, testAdd({ args, expected }));
  });
});