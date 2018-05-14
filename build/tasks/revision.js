const gulp = require('gulp')
const rev = require('gulp-rev')
const path = require('path')

const config = require('./config')
const SOURCE_DIR = config.SOURCE_DIR
const DEV_DIR = config.DEV_DIR
const DEST_DIR = config.DEST_DIR
const SERVER_APP_DIR = config.SERVER_APP_DIR
const CSS = config.CSS
const JS = config.JS
const IMAGES = config.IMAGES
const FONTS = config.FONTS
const PDFS = config.PDFS
const VIDEOS = config.VIDEOS

const REVABLE = [].concat(JS, CSS, IMAGES, FONTS, PDFS, VIDEOS).map(
  asset => path.join(DEV_DIR, asset)
)

module.exports = () => {
  return gulp.src(REVABLE)
    .pipe(rev())
    .pipe(gulp.dest(DEST_DIR))
    .pipe(rev.manifest())
    .pipe(gulp.dest(DEST_DIR))
}
