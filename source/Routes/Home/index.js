import find from 'lodash/find'
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'

import HomeLayout from '../../layouts/Home'

import { fetchRoute } from 'tour-tracker'
import { fetchPage } from '../../store/actions/pages'
import { fetchCampaign } from '../../store/actions/campaign'
import { fetchCharities } from '../../store/actions/charities'
import { fetchMetrics } from '../../store/actions/metrics'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource = {}, fetcher) => (
  isFetched(resource)
  ? Promise.resolve()
  : fetcher()
)

export const fetchHomePageContent = ({
  dispatch,
  pages = {},
  campaign = {},
  charities = {},
  tracker = { routes: [] }
}) => {
  const homePage = find(pages.data, (p) => p.route === 'home')

  return new Promise((resolve, reject) => {
    Promise.all([
      unlessFetched(homePage, () => fetchPage(dispatch)('home')),
      unlessFetched(charities, () => fetchCharities(dispatch)()),
      tracker.routes.forEach((route, index) => unlessFetched(route, () => fetchRoute(index, route.waypoints)(dispatch))),
      fetchMetrics(dispatch)(process.env.CAMPAIGN_ID, process.env.START_DATE, process.env.END_DATE),
      fetchCampaign(dispatch)(process.env.CAMPAIGN_ID)
    ]).then(resolve, reject)
  })
}

const hooks = {
  fetch: ({
    dispatch,
    pages,
    campaign,
    charities,
    tracker
  }) => (
    fetchHomePageContent({
      dispatch,
      pages,
      campaign,
      charities,
      tracker
    })
  )
}

const mapStateToProps = ({
  pages = {},
  charities = {},
  campaign = {}
}) => ({
  pages: pages.data,
  charities: charities.data,
  campaign: campaign.campaign,
})

export default connect(
  mapStateToProps
)(provideHooks(hooks)(
  ({
    pages = [],
    charities = [],
    campaign = {},
    location = {}
  }) => {
    const { query } = location
    const home = find(pages, (h) => h.route === 'home') || {}
    const charityIds = typeof process.env.CHARITY_IDS !== 'undefined'
    ? process.env.CHARITY_IDS.split(',')
    : charities.map((c) => (c.charityId))
    const { content = {} } = home
    const {
      upperTagline = '',
      middleTagline = '',
      lowerTagline = '',
      introduction = '',
      race = '',
      cause = '',
      reward = '',
      inspiration = '',
      register = '',
      connect = '',
      cycle = ''
    } = content
    return (
      <HomeLayout
        hero={{
          tagline: {
            upperTagline,
            middleTagline,
            lowerTagline
          },
          charityIds
        }}
        intro={{
          body: introduction
        }}
        race={{
          body: race
        }}
        cause={{
          body: cause
        }}
        reward={{
          body: reward
        }}
        inspiration={{
          body: inspiration
        }}
        steps={{
          register,
          connect,
          cycle
        }}
        charities={charities}
        pageSearchModal={query.hasOwnProperty('pageSearchModal')}
        charitySearchModal={query.hasOwnProperty('charitySearchModal')}
      />
    )
  })
 )
