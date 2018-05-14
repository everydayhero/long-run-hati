'use strict'

const gulp = require('gulp')
const filter = require('gulp-filter')
const File = require('vinyl')
const markdown = require('gulp-markdown-to-json')
const jsoncombine = require('gulp-jsoncombine')
const through = require('through2')
const path = require('path')

const config = require('./config')
const SOURCE_DIR = config.SOURCE_DIR
const DEV_DIR = config.DEV_DIR
const DEST_DIR = config.DEST_DIR
const CONTENT = config.CONTENT

const destination = (process.env.NODE_ENV || 'development') !== 'development'
  ? DEST_DIR
  : DEV_DIR

const assign = Object.assign

const CONTENT_SOURCES = CONTENT.map((SOURCE_FORMAT) => (
  path.join(SOURCE_DIR, SOURCE_FORMAT)
))

const createAggregateFiles = (manifestName) => {
  return through.obj(function (file, _, next) {
    if (path.basename(file.path) === manifestName) {
      let manifest = JSON.parse(file.contents.toString())
      Object.keys(manifest).forEach((filePath) => {
        this.push(
          new File({
            path: path.join(filePath, 'index.json'),
            contents: new Buffer(JSON.stringify(manifest[filePath]))
          })
        )
      })
    }
    next()
  })
}

module.exports = () => {
  const markdownFilter = filter('**/*.md', { restore: true })

  return gulp.src(CONTENT_SOURCES)
    .pipe(markdownFilter)
    .pipe(markdown())
    .pipe(markdownFilter.restore)
    .pipe(jsoncombine('aggregate.json', function (data) {
      const manifest = Object.keys(data).reduce((acc, filePath) => {
        const dir = path.dirname(filePath)
        const name = path.basename(filePath)
        acc[dir] = acc[dir] || {}

        return assign({}, acc, {
          [dir]: assign({}, acc[dir], {
            [name]: data[filePath]
          })
        })
      }, {})

      return new Buffer(JSON.stringify(manifest))
    }))
    .pipe(createAggregateFiles('aggregate.json'))
    .pipe(gulp.dest(path.join(destination, 'content')))
}
