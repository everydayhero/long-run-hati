import createLogger from 'redux-logger'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { getRoutes } from '../course'

const PROD = process.env.NODE_ENV === 'production'

const loggerMiddleware = createLogger()

const middleware = PROD
  ? [thunkMiddleware]
  : [thunkMiddleware, loggerMiddleware]

const configureState = (initialState) => {
  const { map = {} } = initialState
  return {
    ...initialState,
    map: {
      ...map,
      routes: map.routes || getRoutes()
    }
  }
}

const createStoreWithMiddleware = compose(
  applyMiddleware(
    ...middleware
  )
)(createStore)

export const configureStore = (initialState = {}) => (
  createStoreWithMiddleware(reducers, configureState(initialState))
)

export default configureStore({ pages: {} })
