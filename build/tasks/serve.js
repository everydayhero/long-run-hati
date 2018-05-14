const devServer = require('../server')

module.exports = (browserSync) => (callback) => {
  devServer(() => {
    browserSync.init({
      proxy: 'localhost:8080'
    })
    callback()
  })
}

