const path = require('path')
const buildStatic = require('../build-static')
const config = require('./config')
const DEST_DIR = config.DEST_DIR
const SERVER_APP_DIR = config.SERVER_APP_DIR

module.exports = () => {
  const routes = require('../../config/static-routes')
  const server = require(path.join('../../', SERVER_APP_DIR, 'main.js')).default

  return server.prefetchedStore()
    .then((store) => {
      return buildStatic(
        DEST_DIR, server.generatedRoutes(store).concat(routes), store, server.app
      )
    })
}
