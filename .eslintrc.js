const path = require("path");

module.exports = {
  root: true,
  extends: "eslint-config-egg",
  env: {
    es6: true,
    browser: true,
    node: true
  },
  //   parser: "babel-eslint",
  plugins: [],
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalDecorators: true
    }
  },
  globals: {},
  settings: {
    "import/resolver": {}
  },
  rules: {}
};
