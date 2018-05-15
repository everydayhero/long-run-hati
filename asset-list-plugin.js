const { keys } = Object

module.exports = class {
  apply (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      const content = JSON.stringify(keys(compilation.assets))
      compilation.assets['assets.json'] = {
        source () { return content },
        size () { return content.length }
      }
      callback()
    })
  }
}
