import test from 'ava'
import captcha from '..'

test('should return an object and include token and buffer', async t => {
  const { token, buffer } = await captcha()

  t.is(token.length, 5)
  t.is(buffer.length, 17646)
})
