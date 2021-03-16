'use strict';

module.exports = {
  env: {
    node: true,
  },
  extends: [
    `${__dirname}/common.js`,
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },
};
