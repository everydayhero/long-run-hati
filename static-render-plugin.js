const { writeFile } = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')

const writeFileP = (name, content) => (
  new Promise((resolve) => {
    mkdirp(path.dirname(name), (err) => {
      if (err) throw new Error(err)

      writeFile(name, content, (err) => {
        if (err) throw new Error(err)

        return resolve({
          name,
          content
        })
      })
    })
  })
)

const build = (destDir, routes, app) => (
  Promise.all(
    routes.map((route) => {
      console.log(`[STATIC] Matching ${route}`)
      return app(route).then(({ result }) => {
        console.log(`[STATIC] Writing ${route.slice(1)}/index.html`)
        return writeFileP(
          path.join(destDir, route.slice(1), 'index.html'),
          result
        )
      })
    })
  )
)

module.exports = class {
  constructor ({ routes, getAssetList }) {
    this.routes = routes
    this.getAssetList = getAssetList
  }

  apply (compiler) {
    compiler.plugin('done', ({ compilation }) => {
      this.getAssetList().then((assets) => {
        const appPath = path.join(compilation.outputOptions.path, 'server.js')
        const { default: createApp } = require(appPath)
        const assetList = assets.map((asset) => path.join(compilation.outputOptions.publicPath, asset))
        console.log(assetList)

        return Promise.resolve({ assets: assetList }).then(createApp).then((app) => {
          return build(compilation.outputOptions.path, app.staticRoutes, app)
        })
      }).catch((e) => {
        console.error(e)
      })
    })
  }
}
