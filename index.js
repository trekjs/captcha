try {
  module.exports = require('./build/Release/addon')
} catch (err) {
  console.log(err)
  module.exports = require('./build/Debug/addon')
}
