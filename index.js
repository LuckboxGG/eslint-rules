'use strict';

const frontend = require('./frontend');
const backend = require('./backend');

module.exports = {
  backend: backend.backendJS,
  backendTs: backend.backendTS,
  frontend,
};
