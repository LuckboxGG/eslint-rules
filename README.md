# Luckbox ESLint rules

## Requirements

* ESLint 7.2.0 or newer

## Usage

Rules are exposed as named CommonJS exports and are split into 3 distinct types: 

* `frontend` - Frontend (combining both TypeScript and JavaScript rules) 
* `backend` / `backendJS` - Backend JavaScript only rules
* `backendTs` / `backendTS` - Backend TypeScript only rules

Example usage of backend JavaScript rules with ESLint configuration being loaded
from `.eslintrc.js`:

```javascript
'use strict';

const { backend } = require('@luckbox/eslint-rules');

module.exports = backend;
```
