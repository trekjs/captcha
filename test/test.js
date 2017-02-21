const captcha = require('..')

const { token, buffer } = captcha()

console.log(token)
console.log(buffer)
