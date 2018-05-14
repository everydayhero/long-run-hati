import React from 'react'

import HomeTracker from '../HomeTracker'
import HomeLeaderboards from '../HomeLeaderboards'
import Hero from '../Hero'
import Intro from '../Intro'
import Race from '../Race'
import Cause from '../Cause'
import Reward from '../Reward'
import Inspiration from '../Inspiration'
import Charities from '../Charities'
import Main from '../Main'

export default ({
  title,
  hero = {},
  intro = {},
  race = {},
  cause = {},
  reward = {},
  charities = [],
  teams = [],
  individuals = [],
  route = {},
  inspiration = {},
  campaignUid = '',
  currentHash = '',
  pageSearchModal = false,
  charitySearchModal = false
}) => (
  <Main title={title}>
    <Hero {...{
      ...hero,
      pageSearchModal,
      charitySearchModal
    }} />
    <HomeTracker />
    <HomeLeaderboards />
    <Intro {...{
      ...intro,
      currentHash
    }} />
    <Race {...{
      ...race,
      currentHash
    }} />
    <Cause {...{
      ...cause,
      currentHash
    }} />
    <Reward {...{
      ...reward,
      currentHash
    }} />
    <Charities {...{
      charities,
      currentHash
    }} />
    <Inspiration {...{
      ...inspiration,
      currentHash
    }} />
  </Main>
)
