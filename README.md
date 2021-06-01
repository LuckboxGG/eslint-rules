# Luckbox ESLint rules

## Requirements

* ESLint 7.2.0 or newer

## Usage

Rules are exposed as named CommonJS exports and are split into 3 distinct types: 

* `frontend` - Frontend (TypeScript and JavaScript rules) 
* `backend` - Backend (TypeScript and JavaScript rules)

Example usage of backend JavaScript rules with ESLint configuration being loaded
from `.eslintrc.js`:

```javascript
'use strict';

const { backend } = require('@luckbox/eslint-rules');

module.exports = backend;
```
