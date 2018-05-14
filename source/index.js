import './vendor-globals'

import client from './client'
import server from './server'

require('edh-widgets/src/api/routes.js').setBaseUrl(process.env.SUPPORTER_URL || 'https://everydayhero.com')

if (typeof window !== 'undefined') {
  client()
}

export default server
