import find from 'lodash/find'
import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'

import FeatureCharityLayout from '../../layouts/FeatureCharity'

import { fetchRoute } from 'tour-tracker'
import { fetchPage } from '../../store/actions/pages'
import { fetchCampaign } from '../../store/actions/campaign'
import { fetchCharities } from '../../store/actions/charities'
import { fetchMetrics } from '../../store/actions/metrics'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)

export const fetchCharityContent = ({
  dispatch,
  pages = {},
  params = {},
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
    params,
    campaign,
    charities,
    tracker
  }) => (
    fetchCharityContent({
      dispatch,
      params,
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
  campaign: campaign.campaign
})

export default connect(
  mapStateToProps
)(provideHooks(hooks)(
  ({
    pages = [],
    campaign = {},
    charities = [],
    params: { slug } = { slug: '' },
    location: { query, hash } = { query: {}, hash: '' }
  }) => {
    const home = find(pages, (h) => h.route === 'home') || {}
    const { content = {} } = home
    const {
      upperTagline = '',
      lowerTagline = '',
      race = '',
      inspiration = '',
      register = '',
      connect = '',
      cycle = ''
    } = content
    const charity = find(charities, (c) => c.slug === slug)
    const {
      title = 'Charity',
      logo = { file: { url: '' } },
      causeImage = { file: { url: '' } },
      causeImage2 = { file: { url: '' } },
      url = '',
      introduction = '',
      causeTitle = '',
      cause = ''
    } = charity
    const middleTagline = `Across Australia for ${title}`

    return (
      <FeatureCharityLayout
        title={`${title || 'Featured Charity'} | The Great Southern Crossing`}
        slug={slug}
        hero={{
          tagline: {
            upperTagline,
            middleTagline,
            lowerTagline
          },
          logo,
          registerLink: url
        }}
        intro={{
          body: introduction
        }}
        race={{
          body: race
        }}
        cause={{
          causeTitle,
          causeImage,
          causeImage2,
          body: cause
        }}
        inspiration={{
          body: inspiration
        }}
        steps={{
          register,
          connect,
          cycle
        }}
        charity={charity}
        campaignUid={campaign.uid}
        pageSearchModal={query.hasOwnProperty('pageSearchModal')}
        currentHash={hash}
        currentPage={`/${slug}`}
        registerLink={url}
      />
    )
  })
)
