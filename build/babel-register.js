const conf = require('../package.json').babel
require('babel-register')(Object.assign(conf, {
  only: [
    './node_modules/edh-widgets/**/*.js',
    './source/**/*.js'
  ]
}))
