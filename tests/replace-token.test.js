const assert = require('assert');
const replaceToken = require('../replace-token');

// Testing data
const testDateString = '2020-9-8 20:22:16';
const testDateTimeObject = new Date(testDateString);

const dateTests = [
  { token: 'Y', expected: '2020', title: 'Full year' },
  { token: 'y', expected: '20', title: 'Short year' },
  { token: 'F', expected: 'September', title: 'Full month name' },
  { token: 'j', expected: '8', title: 'Numeric day of month without leading zero' },
  { token: 'D', expected: 'Tue', title: 'Name of week day in short' },
  { token: 'l', expected: 'Tuesday', title: 'Name of week day in full' },
  { token: 'm', expected: '09', title: 'Numeric month with with leading zero' },
  { token: 'M', expected: 'Sept', title: 'Short month name' },
  { token: 'd', expected: '08', title: 'Numeric day of month with leading zero' },
  { token: 'n', expected: '9', title: 'Numeric month' },
  { token: 'L', expected: '1', title: 'Check if leap year' },
  { token: 'w', expected: '2', title: 'Numeric day of week' },
  { token: 'z', expected: '252', title: 'Get nth day of year' },
  { token: 'N', expected: '3', title: 'Get nth day of year' },
];

const timeTests = [
  { token: 'G', expected: '20', title: '24 based hour' },
  { token: 'H', expected: '20', title: '24 based hour' },
  { token: 'g', expected: '8', title: '12 based hour without leading zero' },
  { token: 'h', expected: '08', title: '12 based hour with leading zero' },
  { token: 'i', expected: '22', title: 'Minutes' },
  { token: 'a', expected: 'pm', title: 'Get am/pm' },
  { token: 'A', expected: 'PM', title: 'Get AM/PM' },
  { token: 's', expected: '16', title: 'Seconds' },
];

describe(`Testing replace token with: ${testDateString}`, () => {
  describe('Test date tokens:', () => {
    dateTests.forEach((test) => {
      it(`${test.token}: ${test.title.toLowerCase()}, expected: ${test.expected}`, () => {
        const tokenValue = replaceToken(testDateTimeObject, test.token);
        assert.equal(String(tokenValue), test.expected);
      });
    });
  });

  describe('Test time tokens:', () => {
    timeTests.forEach((test) => {
      it(`${test.token}: ${test.title.toLowerCase()}, expected: ${test.expected}`, () => {
        const tokenValue = replaceToken(testDateTimeObject, test.token);
        assert.equal(String(tokenValue), test.expected);
      });
    });
  });
});
