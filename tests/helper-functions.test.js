const assert = require('assert');
const helperFunctions = require('../helper-functions');

describe('Testing helper functions:', () => {
  describe('Test `makeSureJsDateObject()` function.', () => {
    it('Should convert date string to javascript date object.', () => {
      const convertedDate = helperFunctions.makeSureJsDateObject('2020-11-02');
      assert(convertedDate instanceof Date);
    });

    it('Should javascript date should still be javascript date object.', () => {
      const inputDate = new Date();
      const convertedDate = helperFunctions.makeSureJsDateObject(inputDate);
      assert(convertedDate instanceof Date);
    });

    it('Should convert firebase date object to javascript date object.', () => {
      // Firebase date object has toDate method, and it returns Javascript date object
      // upon calling toDate method. Let's simulate this.
      const fakeFirebaseDate = {
        toDate: () => new Date(),
      };

      const convertedDate = helperFunctions.makeSureJsDateObject(fakeFirebaseDate);
      assert(convertedDate instanceof Date);
    });

    it(`Should return today's date if 'now' is passed as an argument. (${new Date().toDateString()})`, () => {
      const todayDate = new Date();
      const returnedDate = helperFunctions.makeSureJsDateObject('now');
      assert.equal(todayDate.toDateString(), returnedDate.toDateString());
    });

    it(`Should return null if no argument is passed. (${new Date().toDateString()})`, () => {
      const returnedDate = helperFunctions.makeSureJsDateObject();
      assert.equal(returnedDate, null);
    });
  });

  describe('Test `removeLeadingZero()` function.', () => {
    it('Should remove leading from 01 and return 1.', () => {
      assert.equal(helperFunctions.removeLeadingZero('01'), 1);
    });
  });

  describe('Test `needsLeadingZero()` function.', () => {
    it('Should add a leading zero to 1 and return 01', () => {
      assert.equal(helperFunctions.needsLeadingZero(1), '01');
    });
  });
});
