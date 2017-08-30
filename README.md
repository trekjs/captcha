# captcha

A Lightweight Pure JavaScript Captcha for Node.js. No C/C++, No ImageMagick, No canvas. Inspired By [rucaptcha](https://github.com/huacnlee/rucaptcha).


## Installation

```
$ npm install trek-captcha --save
```


## Examples

```js
'use strict'

const fs = require('fs')
const captcha = require('trek-captcha')

async function run() {
  const { token, buffer } = await captcha()

  // console.log(token, buffer)

  fs.createWriteStream('a.gif').on('finish', () => console.log(token)).end(buffer)
}

run()
```

<img src="https://cloud.githubusercontent.com/assets/5518/22151425/e02390c8-df58-11e6-974d-5eb9b1a4e577.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151427/e4939d92-df58-11e6-9754-4a46a86acea8.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151431/e494576e-df58-11e6-9845-a5590904c175.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151432/e495066e-df58-11e6-92b8-38b40b73aba0.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151428/e49404ee-df58-11e6-8e2d-8b17b33a3710.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151430/e4942406-df58-11e6-9ff8-6e2325304b41.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151429/e4941ae2-df58-11e6-8107-757296573b2f.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151433/e4c7c89c-df58-11e6-9853-1ffbb4986962.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151435/e4c97ea8-df58-11e6-8959-b4c78716271d.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151436/e4cc09f2-df58-11e6-965c-673333b33c0d.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151434/e4c87788-df58-11e6-9490-c255aaafce71.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151445/ee35ff66-df58-11e6-8660-a3673ef3f5ee.gif" width="150px" /> <img src="https://cloud.githubusercontent.com/assets/5518/22151446/ee67b074-df58-11e6-9b95-7d53eec21c33.gif" width="150px" />

## API

`captcha({ size: 5, style: -1 })`

* **size**:   Defaults to 5.
* **style**: Defaults to -1 with random.

```js
// returns
{
  token,
  buffer
}
```


## Badges

[![Linux](https://travis-ci.org/trekjs/captcha.svg?branch=master)](https://travis-ci.org/trekjs/captcha)
[![Windows](https://img.shields.io/appveyor/ci/fundon/captcha/master.svg?label=windows)](https://ci.appveyor.com/project/fundon/captcha)
[![codecov](https://codecov.io/gh/trekjs/captcha/branch/master/graph/badge.svg)](https://codecov.io/gh/trekjs/captcha)
![](https://img.shields.io/badge/license-MIT-blue.svg)

---

> [fundon.me](https://fundon.me) &nbsp;&middot;&nbsp;
> GitHub [@fundon](https://github.com/fundon) &nbsp;&middot;&nbsp;
> Twitter [@_fundon](https://twitter.com/_fundon)
