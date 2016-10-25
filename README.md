# RevisePlugin

* `npm install --save-dev webpack-revise-plugin`

## Usage

```javascript
var path = require('path');
var RevisePlugin = require('webpack-revise-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, './build')
  },
  plugins: [
    new RevisePlugin()
  ]
};
```

Output:

```
build/
  main.edd8cd6d.js
  main.js.rev
src/
  index.js
package.json
webpack.config.js
```

main.js.rev

```
main.edd8cd6d.js
```
