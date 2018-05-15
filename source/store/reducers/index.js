import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import pages from './pages'
import calculator from './calculator'
import { reducer as map } from 'tour-tracker'
import waypoints from './waypoints'
import teams from './teams'
import individuals from './individuals'

export default combineReducers({
  pages,
  calculator,
  map,
  waypoints,
  teams,
  individuals,
  routing: routerReducer
})
