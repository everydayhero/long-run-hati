import { LOCATION_CHANGE } from 'react-router-redux'
import { find } from 'lodash'
import { getRoutes } from '../../../course'

const routes = getRoutes()

const checkForWaypoint = (state, { query }) => {
  if (!query.waypoint) {
    return {}
  }

  if (!state.selected || state.selected.id !== query.waypoint) {
    return {
      selected: find(routes[0].waypoints, (o) => o.id && o.id.toString() === query.waypoint)
    }
  }

  return state
}

export default (state = {}, {type, payload}) => {
  switch (type) {
    case LOCATION_CHANGE:
      return checkForWaypoint(state, payload)
    default:
      return state
  }
}
