module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "jest": true
  },
  "plugins": ["node"],
  "extends": [
    __dirname + "/common.js",
   "plugin:node/recommended"
  ],
  "rules": {
    "node/exports-style": ["error", "module.exports"],
    "node/no-extraneous-import": "error",
    "node/no-unpublished-require": "off",
    "no-useless-catch": "off",
    "require-atomic-updates": "off",
    "no-duplicate-imports": "error",
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "node/no-missing-import": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-missing-require": "off",
        "node/no-unpublished-import": "off",
        "no-undef": "off",
      }
    }
  ],
};
