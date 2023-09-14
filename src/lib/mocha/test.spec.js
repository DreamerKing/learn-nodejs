import assert from 'assert';
import { describe, it } from 'mocha';

describe('Array', function () {
  this.slow(300);
  this.timeout(500);
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function (done) {
      assert.equal([1, 2, 3].indexOf(4), -1);
      setTimeout(done, 300);
    });
    it('should return 1 when the value is in present', function (done) {
      assert.equal([1, 2, 3].indexOf(2), 1);
      setTimeout(done, 400);
    })
  });

  describe('detects multiple calls', function () {
    it('double done', function (done) {
      setImmediate(done);
      // setImmediate(done);
    })
  });

  describe('mocha state', function () {
    it.skip('test state pending')
    it('it only', function () {
      assert.equal([1, 2, 3].includes(1), true);
    })
  })
})