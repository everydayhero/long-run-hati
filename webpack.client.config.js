const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetListPlugin = require('./asset-list-plugin')
const loadEnv = require('./load-env')
const cssNext = require('postcss-cssnext')
const cssVars = require('./source/traits/variables.json')

loadEnv()

const {
  loaders,
  plugins,
  context,
  stats
} = require('./webpack.shared.config')

const cssExtractor = new ExtractTextPlugin(
  'main.css',
  { allChunks: true }
)

const define = new webpack.DefinePlugin({
  'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
  'process.env.PRISMIC_HOME_ID': `'${process.env.PRISMIC_HOME_ID}'`,
  'process.env.BASE_URL': `'${process.env.BASE_URL || ''}'`,
  'process.env.BASE_PATH': `'${process.env.BASE_PATH || '/'}'`,
  'process.env.SUPPORTER_URL': `'${process.env.SUPPORTER_URL || '/'}'`,
  'process.env.CAMPAIGN_UID': `'${process.env.CAMPAIGN_UID || '/'}'`,
  'process.env.JOIN_URL': `'${process.env.JOIN_URL || '/'}'`,
  'process.env.LOGIN_URL': `'${process.env.LOGIN_URL || '/'}'`,
  'process.env.DONATE_URL': `'${process.env.DONATE_URL || '/'}'`,
  'process.env.FILTER_TEAMS': `'${process.env.FILTER_TEAMS || []}'`
})

const uglify = new webpack.optimize.UglifyJsPlugin()
const assetList = new AssetListPlugin()

const clientPlugins = [
  define,
  cssExtractor,
  assetList
]

if (process.env.NODE_ENV === 'production') {
  clientPlugins.push(uglify)
}

const clientLoaders = [
  {
    test: /\.scss$/,
    loader: cssExtractor.extract(
      'style',
      'css!sass!postcss'
    )
  },
  {
    test: /\.css$/,
    loader: cssExtractor.extract(
      'style',
      'css?modules&importLoaders=1&sourceMap!postcss-loader'
    )
  }
]

module.exports = {
  context,
  stats,
  entry: './client.js',
  node: { fs: 'empty' },
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
    publicPath: process.env.BASE_PATH || '/'
  },
  module: {
    loaders: loaders.concat(clientLoaders)
  },
  postcss () {
    return [
      cssNext({
        features: {
          customProperties: {
            variables: cssVars
          }
        }
      }
    )]
  },
  plugins: plugins.concat(clientPlugins)
}
