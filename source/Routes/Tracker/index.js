import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'

import Tracker from '../../layouts/Tracker'

import { fetchRoute } from 'tour-tracker'
import { fetchMetrics } from '../../store/actions/metrics'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource = {}, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)

const fetchTrackerContent = ({
  dispatch,
  teams = {},
  individuals = {},
  tracker = { routes: [] }
}) => {
  return new Promise((resolve, reject) => {
    Promise.all([
      tracker.routes.forEach((route, index) => unlessFetched(route, () => fetchRoute(index, route.waypoints)(dispatch))),
      fetchMetrics(dispatch)(process.env.CAMPAIGN_ID, process.env.START_DATE, process.env.END_DATE)
    ]).then(resolve, reject)
  })
}

const hooks = {
  fetch: ({
    dispatch,
    tracker
  }) => (
    fetchTrackerContent({
      dispatch,
      tracker
    })
  )
}

export default provideHooks(hooks)(Tracker)
