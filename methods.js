/* eslint-disable no-continue */
const replaceToken = require('./replace-token');

function methodGet(inputDate, format) {
  if (typeof format === 'undefined' || !format || typeof format !== 'string') {
    return inputDate.toString();
  }

  let output = '';
  const tokens = format.split('');
  let isEscapeMode = false;

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];

    if (token === '[' && !isEscapeMode) {
      isEscapeMode = true;
      continue;
    }

    if (token === ']' && isEscapeMode) {
      isEscapeMode = false;
      continue;
    }

    if (isEscapeMode) {
      output += token;
      continue;
    }

    const tokenValue = replaceToken(inputDate, token);
    output += (tokenValue === null) ? token : tokenValue;
  }

  return output;
}

module.exports = {
  methodGet,
};
