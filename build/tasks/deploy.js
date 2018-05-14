const path = require('path')
const gulp = require('gulp')
const awspublish = require('gulp-awspublish')
const buildConfig = require('./config')
const DEST_DIR = buildConfig.DEST_DIR

const defaultHeaders = {
  'Cache-Control': 'max-age=315360000, no-transform, public'
}

module.exports = (config, headers) => {
  headers = headers || defaultHeaders

  return () => {
    const publisher = awspublish.create({
      params: {
        Bucket: config.bucket
      },
      accessKeyId: config.key,
      secretAccessKey: config.secret,
      region: config.region
    })

    return gulp.src(path.join(DEST_DIR, '**'))
      .pipe(publisher.publish(headers))
      .pipe(awspublish.reporter())
  }
}
