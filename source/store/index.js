import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducers from './reducers'

export const configureStore = (initialState) => {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(
      reducers,
      initialState
      // applyMiddleware(createLogger({ logger: console }))
    )
  } else {
    return createStore(
      reducers,
      initialState
    )
  }
}

export default configureStore({ charities: {}, pages: {}, campaign: {} })
