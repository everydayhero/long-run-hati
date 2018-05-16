import find from 'lodash/find'
import { provideHooks } from 'redial'
import React from 'react'
import { fetchRoute } from 'tour-tracker'
import { connect } from 'react-redux'

import HomeLayout from '../../layouts/Home'

import { fetchPage } from '../../store/actions/pages'
import { fetchTeams } from '../../store/actions/teams'
import { fetchIndividuals } from '../../store/actions/individuals'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource = {}, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)

export const fetchHomePageContent = ({
  dispatch,
  pages = {},
  teams = {},
  individuals = {},
  map = {}
}) => {
  const homePage = find(pages.data, (p) => p.route === 'home')
  const course = map.routes[0]

  return Promise.all([
    unlessFetched(homePage, () => fetchPage(dispatch)('home')),
    unlessFetched(course, () => fetchRoute(0, course.waypoints)(dispatch)),
    fetchTeams(dispatch)(process.env.CAMPAIGN_UID, process.env.FILTER_TEAMS.split(',')),
    fetchIndividuals(dispatch)(process.env.CAMPAIGN_UID)
  ])
}

const hooks = {
  fetch: ({
    dispatch,
    pages,
    teams,
    individuals,
    map
  }) => (
    fetchHomePageContent({
      dispatch,
      pages,
      teams,
      individuals,
      map
    })
  )
}

const mapStateToProps = ({
  pages = {},
  teams = {},
  individuals = {}
}) => ({
  pages: pages.data,
  teams: teams.data,
  individuals: individuals.data
})

const Home = ({
  pages = [],
  teams = [],
  individuals = [],
  location = {}
}) => {
  const { hash } = location
  const home = find(pages, (h) => h.route === 'home') || {}
  const { content = {} } = home
  return (
    <HomeLayout
      {...content}
      teams={teams}
      individuals={individuals}
      currentHash={hash}
    />
  )
}

export default connect(mapStateToProps)(provideHooks(hooks)(Home))
