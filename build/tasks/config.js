module.exports = {
  SOURCE_DIR: 'source',
  DEV_DIR: '.dev',
  DEST_DIR: 'dist',
  SERVER_APP_DIR: '.server',
  JS: [
    '**/*.js'
  ],
  CSS: [
    '**/*.css'
  ],
  IMAGES: [
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
    '**/*.gif'
  ],
  VIDEOS: [
    '**/*.mp4',
    '**/*.ogv',
    '**/*.webm'
  ],
  PDFS: [
    '**/*.pdf'
  ],
  FONTS: [
    '**/*.ttf',
    '**/*.eot',
    '**/*.woff'
  ],
  CONTENT: [
    'content/**/*.md',
    'content/**/*.json'
  ],
  DATA: [
    '**/*.json'
  ],
  LIBRARIES: [
    '../node_modules/leaflet/dist/leaflet.js',
    '../node_modules/leaflet/dist/leaflet.css'
  ]
}
