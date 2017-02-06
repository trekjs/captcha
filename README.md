# captcha

A lightweight captcha (C++) for Node.js. No ImageMagick, No RMagick. Inspired By [rucaptcha](https://github.com/huacnlee/rucaptcha).


## Installation

```
$ npm install trek-captcha --save
```


## Examples

```js
'use strict'

const fs = require('fs')
const captcha = require('trek-captcha')

const { token, buffer } = captcha(5)

// console.log(token, buffer)

fs.createWriteStream('a.gif').on('finish', () => console.log('END')).end(buffer)

```


## API

`captcha(int)`


## Badges

[![Build Status](https://travis-ci.org/trekjs/captcha.svg?branch=master)](https://travis-ci.org/trekjs/captcha)
[![codecov](https://codecov.io/gh/trekjs/captcha/branch/master/graph/badge.svg)](https://codecov.io/gh/trekjs/captcha)
![](https://img.shields.io/badge/license-MIT-blue.svg)

---

> [fundon.me](https://fundon.me) &nbsp;&middot;&nbsp;
> GitHub [@fundon](https://github.com/fundon) &nbsp;&middot;&nbsp;
> Twitter [@_fundon](https://twitter.com/_fundon)
