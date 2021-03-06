const env = require('node-env-file')
const path = require('path')

module.exports = () => {
  try {
    env(path.join(process.cwd(), process.env.ENV_FILE))
    env(path.join(process.cwd(), '.env'))
  } catch (err) {
    console.warn('ENV WARN: No env file found')
  }
}

