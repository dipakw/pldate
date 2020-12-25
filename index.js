const { makeSureJsDateObject } = require('./helper-functions');
const { methodGet } = require('./methods');

function PLDate(inputDate) {
  this.inputDate = makeSureJsDateObject(inputDate);
  this.get = (format) => methodGet(this.inputDate, format);
  this.obj = () => this.inputDate; // Return JS object.
}

module.exports = PLDate;
