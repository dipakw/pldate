function makeSureJsDateObject(input) {
  if (input === 'now') {
    return new Date();
  }

  if (typeof input === 'string') {
    return new Date(input);
  }

  if (typeof input === 'object') {
    // Check if default javascript date object
    if (input instanceof Date) {
      return input;
    }

    // Check if it is firebase date object
    // Firebase date object has toDate method, so lets check if that method exists,
    // if exists, then call and return.
    if (typeof input.toDate === 'function') {
      return input.toDate();
    }
  }

  // If the input skips the checks above somehow,
  // then return null.
  return null;
}

function needsLeadingZero(value) {
  const numericValue = Number(value);

  if (numericValue < 10) {
    return `0${value}`;
  }

  return numericValue;
}

function removeLeadingZero(value) {
  return Number(value);
}

function getNthDayOfYear(dateObject) {
  let numberOfDaysTillLastMonth = 0;
  const thisMonth = dateObject.getMonth() + 1; // Add one because it starts with 0
  const lastMonth = thisMonth - 1;

  for (let month = 1; month <= lastMonth; month += 1) {
    numberOfDaysTillLastMonth += Number(new Date(dateObject.getFullYear(), month, 0).getDate());
  }

  const currentNthDayOfYear = numberOfDaysTillLastMonth + dateObject.getDate();
  return currentNthDayOfYear;
}

module.exports = {
  makeSureJsDateObject,
  needsLeadingZero,
  removeLeadingZero,
  getNthDayOfYear,
};
