module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 0,
  },
};
