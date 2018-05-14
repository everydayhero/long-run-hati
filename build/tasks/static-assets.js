const gulp = require('gulp')
const path = require('path')

const config = require('./config')
const SOURCE_DIR = config.SOURCE_DIR
const DEV_DIR = config.DEV_DIR
const IMAGES = config.IMAGES
const PDFS = config.PDFS
const FONTS = config.FONTS
const VIDEOS = config.VIDEOS
const LIBRARIES = config.LIBRARIES

const STATIC_ASSETS = [].concat(IMAGES, PDFS, FONTS, VIDEOS, LIBRARIES).map(
  (asset) => path.join(SOURCE_DIR, asset)
)

module.exports = () => {
  return gulp.src(STATIC_ASSETS)
    .pipe(gulp.dest(DEV_DIR))
}

gulp.task('watch:static-assets', ['static-assets'], () => {
  return gulp.watch(STATIC_ASSETS, () => {
    return gulp.start('static-assets')
  })
})
