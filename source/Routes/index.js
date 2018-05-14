import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './Home'
import FeatureCharity from './FeatureCharity'
import FourOhFour from './FourOhFour'
import Tracker from './Tracker'

export default (
  <Route
    path={`${process.env.BASE_PATH || '/'}`}
    component={({ children }) => children}>
    <IndexRoute
      component={Home}
    />
    <Route
      path='tracker'
      component={Tracker}
    />
    <Route
      path=':slug'
      component={FeatureCharity}
    />
    <Route
      path='*'
      component={FourOhFour}
    />
  </Route>
)
