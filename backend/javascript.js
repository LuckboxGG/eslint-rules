'use strict';

module.exports = {
  'overrides': [
    {
      'files': ['*.js'],
      'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'script',
      },
      'extends': [
        `${__dirname}/../common.js`,
        `${__dirname}/common.js`,
      ],
      'rules': {
        'node/exports-style': ['error', 'module.exports'],
      },
    },
  ],
};
