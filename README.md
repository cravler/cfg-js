# cfg-js

A simple config module

## Install

This package depends on [Node.js](http://nodejs.org/).

```sh
$ npm install cfg-js
```

## Usage

```js
var Config = require('cfg-js');

var cfg = new Config({
    hello: {
        cfg: {
            js: 'hello cfg-js'
        }
    }
});

cfg.has('hello.cfg.js'); // true
cfg.get('hello.cfg.js'); // 'hello cfg-js'

cfg.has('js.cfg.hello'); // false
cfg.get('js.cfg.hello'); // undefined
```

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```