'use strict';

module.exports = {
  'overrides': [
    {
      'files': ['*.js'],
      'extends': [
        `${__dirname}/../common.js`,
        `${__dirname}/common.js`,
      ],
    },
  ],
};
