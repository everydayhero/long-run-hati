'use strict'

const express = require('express')
const http = require('http')
const path = require('path')

const BASE = path.resolve(__dirname, '../.dev')

const routes = require('../config/static-routes')

const server = express()

server.use(express.static(BASE))

const prefetchRoutes = () => {
  const reactAppPath = require.resolve('../.server/main')
  const reactApp = require(reactAppPath).default

  return reactApp.prefetchedStore()
    .then((store) => {
      reactApp.generatedRoutes(store).concat(routes).forEach((route) => {
        server.get(route, (req, res) => {
          delete require.cache[reactAppPath]
          reactApp.app(route, store, (err, html) => {
            if (err) { return res.send(`<h1 style="color:red">${err.message}</h1>\n<p>${err.stack}</p>`) }
            res.send(html)
          })
        })
      })
    })
}

module.exports = (callback) => {
  prefetchRoutes()
    .then(() => {
      http.createServer(server).listen(8080, callback)
    })
}
