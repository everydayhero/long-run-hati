import React from 'react'
import withScroll from 'scroll-behavior'
import { Router, browserHistory, match } from 'react-router'
import { trigger } from 'redial'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import routes from './Routes'
import { configureStore } from './store'

export default () => {
  const { document } = window
  const initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
  const store = configureStore(initialState)
  const history = withScroll(browserHistory, (_prevLoc, { hash }) => (
    !hash
  ))

  const { dispatch, getState } = store

  history.listen((location) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) throw new Error(error)

      const {
        components,
        params
      } = renderProps

      const locals = {
        dispatch,
        params,
        ...getState()
      }

      trigger('fetch', components, locals)
    })
  })

  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('mount')
  )
}
