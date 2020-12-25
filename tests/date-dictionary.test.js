const assert = require('assert');
const dateDictionary = require('../date-dictionary');

describe('Testing date dictionary:', () => {
  describe('Test month names:', () => {
    describe('Test short month names:', () => {
      const { shortMonths } = dateDictionary;
      const expectedShortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

      it(`Should have ${expectedShortMonthNames.length} items in short month names dictionary.`, () => {
        assert.equal(shortMonths.length, expectedShortMonthNames.length);
      });

      expectedShortMonthNames.forEach((expectedShortMonthName, i) => {
        const shortMonth = shortMonths[i];

        it(`Expect ${expectedShortMonthName} at position ${i}`, () => {
          assert.equal(shortMonth, expectedShortMonthNames[i]);
        });
      });
    });

    describe('Test long month names:', () => {
      const { longMonths } = dateDictionary;
      const expectedLongMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      it(`Should have ${expectedLongMonthNames.length} items in long month names dictionary.`, () => {
        assert.equal(longMonths.length, expectedLongMonthNames.length);
      });

      expectedLongMonthNames.forEach((expectedLongMonthName, i) => {
        const longMonth = longMonths[i];

        it(`Expect ${expectedLongMonthName} at position ${i}`, () => {
          assert.equal(longMonth, expectedLongMonthNames[i]);
        });
      });
    });
  });

  describe('Test week day names:', () => {
    describe('Test short week day names:', () => {
      const { shortWeekDays } = dateDictionary;
      const expectedShortWeekDaysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      it(`Should have ${expectedShortWeekDaysNames.length} items in short month names dictionary.`, () => {
        assert.equal(shortWeekDays.length, expectedShortWeekDaysNames.length);
      });

      expectedShortWeekDaysNames.forEach((expectedShortMonthName, i) => {
        const shortMonth = shortWeekDays[i];

        it(`Expect ${expectedShortMonthName} at position ${i}`, () => {
          assert.equal(shortMonth, expectedShortWeekDaysNames[i]);
        });
      });
    });

    describe('Test long week day names:', () => {
      const { longWeekDays } = dateDictionary;
      const expecteLongWeekDaysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      it(`Should have ${expecteLongWeekDaysNames.length} items in short month names dictionary.`, () => {
        assert.equal(longWeekDays.length, expecteLongWeekDaysNames.length);
      });

      expecteLongWeekDaysNames.forEach((expectedShortMonthName, i) => {
        const shortMonth = longWeekDays[i];

        it(`Expect ${expectedShortMonthName} at position ${i}`, () => {
          assert.equal(shortMonth, expecteLongWeekDaysNames[i]);
        });
      });
    });
  });
});
