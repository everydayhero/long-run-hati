import { combineReducers } from 'redux'

import charities from './charities'
import pages from './pages'
import campaign from './campaign'
import metrics from './metrics'
import leaderboards from './leaderboards'
import tracker from './tracker'

export default combineReducers({
  campaign,
  charities,
  pages,
  metrics,
  leaderboards,
  tracker
})
