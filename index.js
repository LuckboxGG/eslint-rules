'use strict';

const frontend = require('./frontend');
const backend = require('./backend');

module.exports = {
  backend: backend.backendJS,
  backendJS: backend.backendJS,
  backendTs: backend.backendTS,
  backendTS: backend.backendTS,
  frontend,
};
