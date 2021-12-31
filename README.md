# webpack-config-ts

A webpack addon configuration with support for TypeScript.

## How to Use

Install this library with `yarn add --dev @craigmiller160/webpack-config-ts`. Then setup the `webpack.config.js` file in the root of your project like this:

```javascript
const { merge } = require('webpack-merge');
const tsConfig = require('@craigmiller160/webpack-config-ts');

module.exports = merge([tsConfig, otherConfig1, otherConfig2]);
```
