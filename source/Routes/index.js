import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './Home'
import Tracker from './Tracker'
import FourOhFour from './FourOhFour'

export default (
  <Route
    path='/'
    component={({ children }) => children}>
    <IndexRoute
      component={Home}
    />
    <Route
      path='tracker'
      component={Tracker}
    />
    <Route
      path='*'
      component={FourOhFour}
    />
  </Route>
)
