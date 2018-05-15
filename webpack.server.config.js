const StaticRenderPlugin = require('./static-render-plugin')
const routes = require('./config/static-routes')
const { readFile } = require('fs')
const loadEnv = require('./load-env')

loadEnv()

const getAssetList = () => (
  new Promise((resolve) => {
    readFile('./dist/assets.json', (error, content) => {
      if (error) throw error

      const assets = JSON.parse(content)

      resolve(assets)
    })
  })
)

const {
  loaders,
  plugins,
  context,
  stats
} = require('./webpack.shared.config')

module.exports = {
  context,
  stats,
  entry: './server.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: `${__dirname}/dist`,
    filename: 'server.js',
    publicPath: process.env.BASE_PATH || '/'
  },
  publicPath: `${__dirname}/dist`,
  module: {
    loaders: loaders.concat([
      {
        test: /\.scss$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        loader: 'css-loader/locals?module'
      }
    ])
  },
  plugins: plugins.concat(
    new StaticRenderPlugin({
      routes,
      getAssetList
    })
  )
}
