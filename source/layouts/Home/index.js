import React from 'react'

import Main from '../Main'
import HomeLeaderboards from '../HomeLeaderboards'
import About from '../About'
import Metrics from '../Metrics'
import JoinTheMovement from '../JoinTheMovement'
import SignUp from '../SignUp'
import LocationsResources from '../LocationsResources'
import Social from '../Social'

export default ({
  header = {},
  footer = {},
  about = {},
  leaderboard = {},
  joinTheMovement = {},
  signUpNow = {},
  locations = {},
  currentHash = '',
  teams = [],
  individuals = [],
  resources = []
}) => (
  <Main
    header={header}
    footer={footer}
  >
    <Metrics
      teams={teams}
      individuals={individuals}
    />
    <HomeLeaderboards
      {...leaderboard}
      teams={teams}
      individuals={individuals}
    />
    <About
      {...about}
    />
    <JoinTheMovement
      {...joinTheMovement}
    />
    <SignUp
      {...signUpNow}
      currentHash={currentHash}
    />
    <LocationsResources resources={resources} locations={locations} />
    <Social />
  </Main>
)
