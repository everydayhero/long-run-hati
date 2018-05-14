import {
  REQUEST_ROUTE,
  RECEIVE_ROUTE_SUCCESS,
  RECEIVE_ROUTE_FAILURE,
} from 'tour-tracker'

import { ROUTES } from '../../../utils/constants'

const defaultState = {
  routes: ROUTES
}

const updateItem = (collection, index, attributes) => ([
  ...collection.slice(0, index),
  { ...collection[index], ...attributes },
  ...collection.slice(index + 1)
])

const requestRoute = (state, { index }) => ({
  ...state,
  routes: updateItem(state.routes, index, { status: 'fetching' })
})

const receiveRouteFailure = (state, { index, error }) => ({
  ...state,
  routes: updateItem(state.routes, index, { status: 'failed', error })
})

const receiveRouteSuccess = (state, { index, points }) => ({
  ...state,
  routes: updateItem(state.routes, index, { status: 'fetched', error: '', points })
})

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case REQUEST_ROUTE:
      return requestRoute(state, payload)
    case RECEIVE_ROUTE_FAILURE:
      return receiveRouteFailure(state, payload)
    case RECEIVE_ROUTE_SUCCESS:
      return receiveRouteSuccess(state, payload)
    default:
      return state
  }
}
