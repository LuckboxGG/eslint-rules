'use strict';

module.exports = {
  'env': {
    'node': true,
    'es6': true,
    'jest': true,
  },
  'plugins': [
    'node',
    'no-only-tests',
    'classProperties',
    '@babel/plugin-proposal-class-properties',
  ],
  'extends': [
    `${__dirname}/common.js`,
    'plugin:node/recommended',
  ],
  'rules': {
    'node/no-extraneous-import': 'error',
    'node/no-unpublished-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-require': 'off',
    'node/no-unpublished-import': 'off',
    'no-useless-catch': 'off',
    'require-atomic-updates': 'off',
    'no-duplicate-imports': 'error',
    'no-only-tests/no-only-tests': 'error',
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    'no-continue': 'off',
  },
  'overrides': [
    {
      'files': ['*.js'],
      'parser': 'babel-eslint',
      'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'script',
        'requireConfigFile': false,
      },
      'rules': {
        'node/exports-style': ['error', 'module.exports'],
      },
    },
    {
      'files': ['*.ts'],
      'parser': '@typescript-eslint/parser',
      'extends': [
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
  ],
};
