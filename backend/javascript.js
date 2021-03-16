'use strict';

module.exports = {
  'overrides': [
    {
      'files': ['*.js'],
      'parserOptions': {
        'ecmaVersion': 10,
        'sourceType': 'script',
      },
      'extends': [
        `${__dirname}/../common.js`,
        `${__dirname}/common.js`,
      ],
    },
  ],
};
