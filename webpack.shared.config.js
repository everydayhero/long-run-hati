const loaders = [
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.js?$/,
    include: /(node_modules\/edh-widgets|node_modules\/boiler-room-runner|source)/,
    loader: 'babel',
    query: {
      presets: [
        'es2015',
        'stage-0',
        'react'
      ]
    }
  },
  {
    test: /(\.png|\.jpg|\.svg|\.eot|\.ttf|\.woff|\.mp4|\.webm|\.ogv)$/,
    loader: 'file-loader'
  }
]

module.exports = {
  stats: { children: false },
  context: `${__dirname}/source`,
  loaders,
  plugins: []
}
