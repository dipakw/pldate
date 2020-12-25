const assert = require('assert');
const PLDate = require('../index');

describe('Testing PLDate methods:', () => {
  const testDate = new PLDate('2020-05-06 6:21:25');

  describe('Testing `.get()` method.', () => {
    it('Should type of .get be function', () => {
      assert.equal(typeof testDate.get, 'function');
    });

    it('Should return 20200506 with the format Ymd.', () => {
      assert.equal(testDate.get('Ymd'), '20200506');
    });

    it('Should skip tokens between [] brackets.', () => {
      assert.equal(testDate.get('Ymd [Ymd]'), '20200506 Ymd');
    });

    it('Should keep [] inside [] brackets.', () => {
      assert.equal(testDate.get('Ymd [[Y]]'), '20200506 [Y]');
    });
  });

  describe('Testing `.obj()` method.', () => {
    it('Should type of .obj be function.', () => {
      assert.equal(typeof testDate.obj, 'function');
    });

    it('Should return the JS date object.', () => {
      assert(testDate.obj() instanceof Date);
    });
  });
});
