'use strict';

const backendJSRules = require('./javascript');

module.exports = {
  'overrides': [
    {
      'files': ['*.ts'],
      'parser': '@typescript-eslint/parser',
      'extends': [
        `${__dirname}/../common.js`,
        `${__dirname}/common.js`,
        'plugin:@typescript-eslint/recommended',
      ],
      'rules': {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        'node/no-missing-import': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-missing-require': 'off',
        'node/no-unpublished-import': 'off',
        'no-undef': 'off',
        'no-shadow': 'off',
      },
    },
    ...backendJSRules.overrides,
  ],
};
