import './vendor.scss'

import React from 'react'
import { createClient } from 'boiler-room-runner'
import { render } from 'react-dom'

import routes from './Routes'
import { configureStore } from './store'
import es6Promise from 'es6-promise'
import 'leaflet'

if (typeof Promise === 'undefined') {
  es6Promise.polyfill()
}

require('edh-widgets/src/api/routes.js').setBaseUrl(process.env.SUPPORTER_URL || 'https://everydayhero.com')

const { document } = window
const initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
const store = configureStore(initialState)

const createLocals = ({
  params,
  store
}) => ({
  ...store.getState(),
  dispatch: store.dispatch,
  params
})

const App = createClient({
  routes,
  store,
  createLocals,
  basepath: process.env.BASE_PATH
})

render(
  <App />,
  document.getElementById('mount')
)
