![GitHub](https://img.shields.io/github/license/dipakw/pldate?style=flat-square)
![npm](https://img.shields.io/npm/v/pldate?label=version&logo=npm&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/dipakw/pldate?style=flat-square)
![nycrc config on GitHub](https://img.shields.io/nycrc/dipakw/pldate?config=.nycrc&label=code%20coverage&preferredThreshold=functions&style=flat-square)

# PLDate - PHP like date time retrieval in NodeJS
A simple, fast, lightweight and easy to use NodeJS library to get the date and time like in PHP.

If you need to get a date in YYYY-MM-DD (or any) format in Javascript without using any libraries, you know it requires multiple lines of code. If you know PHP also, you might know getting a date in PHP is easy, it is like ```date('Ymd')```, you can put tokens on any position and it works. So when you are a PHP developer and coming into the NodeJS world, it's obviously painful for you to deal with date retrieval. So this library helps you to leverage your PHP datetime tokens knowledge and save time. 

# Table of contents
* [Why this library?](#why-this-library)
* [Installation](#installation)
* [Examples](#examples)
* [Tokens](#tokens)
  * [Date tokens](#date-tokens)
  * [Time tokens](#time-tokens)
* [Contribution](#contribution)

# Why this library?
You might be thinking that there is another awesome date time library called **moment**, so why would this library be written? Well, the goal of this library is not to replace the **moment**, in fact moment is loaded with a large set of features, so I just wanted to make an extra lightweight just date time retrieving library with strictly no other features.

# Installation
With NPM
```bash
$ npm install pldate --save
```

With yarn
```bash
$ yarn add pldate --save
```

# Examples
```js
// Regular import
const PLDate = require('pldate');

// Or if you are using JSX (ReactJS, VueJS, etc.)
import PLDate from 'pldate';

/**
 * Input date as 'now' means current date and time.
 * Input date can be date, date/time string, or even javascript `Date` instance.
 * If no input is passed or the input date is invalid, it returns null.
 */
const inputDate = 'now';
/**
 * Other examples of input date.
 * 
 * inputDate also supports firebase date object, or any object that has '.toDate()' method and that returns JS Date.
 */
const inputDate = '2020-12-10';
const inputDate = '2020-12-10 22:58PM';
const inputDate = new Date();
const theDate = new PLDate(inputDate);
-
/**
 * Get JS date object.
 * it returns the an instance of javascript Date.
 */
const jsDateInstance = theDate.obj();

/**
 * Get formatted date or time string.
 * 
 * it returns YYYY-MM-DD formatted date string.
 * the used letters(Y, m, d) are called date tokens
 * please refer to the tokens section below for all the supported tokens
 */
const formattedDate = theDate.get('Y-m-d');
```

# Tokens
Use the following tokens in order to get the date or time.

## Date tokens
* Y - A four digit representation of a year
* y - A two digit representation of a year
* F - A full textual representation of a month (January through December)
* j - The day of the month without leading zeros (1 to 31)
* D - A textual representation of a day (three letters, sun, mon)
* l (lowercase 'L') - A full textual representation of a day (Sunday, Monday)
* m - A numeric representation of a month (from 01 to 12)
* M - A short textual representation of a month (three letters) Jan, Feb
* d - The day of the month (from 01 to 31)
* n - A numeric representation of a month, without leading zeros (1 to 12)
* L - Whether it's a leap year (1 if it is a leap year, 0 otherwise)
* w - A numeric representation of the day (0 for Sunday, 6 for Saturday)
* z - The day of the year (from 0 through 365)
* N - The ISO-8601 numeric representation of a day (1 for Monday, 7 for Sunday)

## Time tokens
* G - 24-hour format of an hour (0 to 23)
* H - 24-hour format of an hour (00 to 23)
* g - 12-hour format of an hour (1 to 12)
* h - 12-hour format of an hour (01 to 12)
* i - Minutes with leading zeros (00 to 59)
* a - Lowercase am or pm
* A - Uppercase AM or PM
* s - Seconds, with leading zeros (00 to 59)


## Unused tokens
Below are the tokens that are available in PHP but not implemented in this library.

* S - The English ordinal suffix for the day of the month (2 characters st, nd, rd or th. Works well with j)
* W - The ISO-8601 week number of year (weeks starting on Monday)
* t - The number of days in the given month
* o - The ISO-8601 year number
* B - Swatch Internet time (000 to 999)
* u - Microseconds (added in PHP 5.2.2)
* e - The timezone identifier (Examples: UTC, GMT, Atlantic/Azores)
* I (capital i) - Whether the date is in daylights savings time (1 if Daylight Savings Time, 0 otherwise)
* O - Difference to Greenwich time (GMT) in hours (Example: +0100)
* P - Difference to Greenwich time (GMT) in hours:minutes (added in PHP 5.1.3)
* T - Timezone abbreviations (Examples: EST, MDT)
* Z - Timezone offset in seconds. The offset for timezones west of UTC is negative (-43200 to 50400)
* c - The ISO-8601 date (e.g. 2013-05-05T16:34:42+00:00)
* r - The RFC 2822 formatted date (e.g. Fri, 12 Apr 2013 12:01:05 +0200)
* U - The seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)

# Contribution
I have just implemented some basic tokens as I thought that other tokens are rarely used and I had not much time to work on it. If you are interested contribute to this library, you are obviously allowed. Hopefully I will see your pull request.
