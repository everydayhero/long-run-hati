import React from 'react'

import HomeTracker from '../HomeTracker'
import HomeLeaderboards from '../HomeLeaderboards'
import Cause from '../Cause'
import Hero from '../Hero'
import Inspiration from '../Inspiration'
import Intro from '../Intro'
import Main from '../Main'
import Race from '../Race'

export default ({
  title,
  slug = '',
  hero = {},
  intro = {},
  race = {},
  cause = {},
  route = {},
  charity = {},
  inspiration = {},
  campaignUid = '',
  currentHash = '',
  pageSearchModal = false,
  charitySearchModal = false,
  currentPage = ''
}) => (
  <Main title={title}>
    <Hero {...{
      ...hero,
      pageSearchModal,
      charitySearchModal,
      currentPage
    }} />
    <HomeTracker charity={charity.title} />
    <HomeLeaderboards charity={charity.title} />
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
      currentHash,
      currentPage
    }} />
    <Inspiration {...{
      ...inspiration,
      currentHash
    }} />
  </Main>
)
