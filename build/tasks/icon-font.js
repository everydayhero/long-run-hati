const path     = require('path')
const async    = require('async')
const gulp     = require('gulp')
const iconfont = require('gulp-iconfont')
const mustache = require('gulp-mustache')
const rename   = require('gulp-rename')
const config   = require('./config.js')
const DEV_DIR  = config.DEV_DIR
const SOURCE_DIR  = config.SOURCE_DIR

module.exports = (done) => {
  const iconStream = gulp
    .src(path.join(SOURCE_DIR, 'components/Icon/icons/*.svg'))
    .pipe(iconfont({ fontName: 'icons' }))

  async.parallel([
    (cb) => {
      iconStream.on('glyphs', function(glyphs, options) {
        gulp.src(path.join(SOURCE_DIR, 'components/Icon/styles.css.mst'))
          .pipe(mustache({
            glyphs: glyphs.map((glyph) => (
              Object.assign({}, glyph, {
                unicode: glyph.unicode[0]
                  .charCodeAt(0)
                  .toString(16)
                  .toUpperCase()
              })
            )),
            fontName: 'icons',
            fontPath: '/components/Icon/'
          }))
          .pipe(rename((path) => {
            path.basename = 'styles'
            path.extname = ".css"
          }))
          .pipe(gulp.dest(path.join(SOURCE_DIR, 'components/Icon')))
          .on('finish', cb)
      })
    },
    (cb) => {
      iconStream
        .pipe(gulp.dest(path.join(DEV_DIR, 'components/Icon')))
        .on('finish', cb)
    }
  ], done)
}
