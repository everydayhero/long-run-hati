import es6Promise from 'es6-promise'
import 'isomorphic-fetch'

if (typeof Promise === 'undefined') {
  es6Promise.polyfill()
}
