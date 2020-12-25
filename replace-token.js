const { needsLeadingZero, removeLeadingZero, getNthDayOfYear } = require('./helper-functions');
const {
  shortMonths, longMonths, shortWeekDays, longWeekDays,
} = require('./date-dictionary');

function replaceToken(inputDate, token) {
  switch (token) {
    // Full year like 2020, 2021
    case 'Y':
      return inputDate.getFullYear();
    // Only part of the year, like 20 from 2020, 21 from 2021 etc
    case 'y':
      return inputDate.getFullYear() - 2000;
    // Full month name, like January, February
    case 'F':
      return longMonths[inputDate.getMonth()];
    // Numeric day of month without leading zero
    case 'j':
      return removeLeadingZero(inputDate.getDate());
    // Name of week day in short, like Sat, Sun
    case 'D':
      return shortWeekDays[inputDate.getDay()];
    // Name of week day in full, like Sunday, Monday
    case 'l':
      return longWeekDays[inputDate.getDay()];
    // Numeric month with with leading zero
    case 'm':
      return needsLeadingZero(inputDate.getMonth() + 1);
    // Short month name, like Jan, Feb
    case 'M':
      return shortMonths[inputDate.getMonth()];
    // Numeric day of month with leading zero
    case 'd':
      return needsLeadingZero(inputDate.getDate());
    // Numeric month, like 1 for Jan, 2 for Feb etc. without leading zero.
    case 'n':
      return Number(inputDate.getMonth() + 1);
    // Check if leap year, 1 if yes, else 0
    case 'L':
      return (inputDate.getFullYear() % 4 === 0) ? '1' : '0';
    // Numeric day of week without leading zero, starts from 0
    case 'w':
      return removeLeadingZero(inputDate.getDay());
    // Nth day of year
    case 'z':
      return getNthDayOfYear(inputDate);
    // Numeric day of week without leading zero, starts from 0
    case 'N':
      return replaceToken(inputDate, 'w') + 1;

    // 24 based hour without leading zero
    case 'G':
      return removeLeadingZero(inputDate.getHours());
    // 24 based hour with leading zero
    case 'H':
      return needsLeadingZero(inputDate.getHours());
    // 12 based hour without leading zero
    case 'g':
      // eslint-disable-next-line no-case-declarations
      const currentHour = inputDate.getHours();
      return currentHour > 12 ? currentHour - 12 : currentHour;
    // 12 based hour with leading zero
    case 'h':
      return needsLeadingZero(replaceToken(inputDate, 'g'));
    // Minutes with leading zero
    case 'i':
      return needsLeadingZero(inputDate.getMinutes());
    // Get am/pm lowercase
    case 'a':
      return (inputDate.getHours() > 11) ? 'pm' : 'am';
    // Get am/pm uppercase
    case 'A':
      return (inputDate.getHours() > 11) ? 'PM' : 'AM';
    // Get seconds with leading zero
    case 's':
      return needsLeadingZero(inputDate.getSeconds());
    default:
      return token;
  }
}

module.exports = replaceToken;
