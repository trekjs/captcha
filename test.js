const fs = require('fs')
const captcha = require('.')

const { token, buffer } = captcha(5)

console.log(token, buffer)

fs.createWriteStream('a.gif').on('finish', () => console.log('END')).end(buffer)

