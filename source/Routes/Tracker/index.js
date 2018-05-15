import React, { Component } from 'react'
import { fetchRoute } from 'tour-tracker'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { provideHooks } from 'redial'
import TrackerLayout from '../../layouts/Tracker'
import { fetchTeams } from '../../store/actions/teams'
import { fetchIndividuals } from '../../store/actions/individuals'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource = {}, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)

export const fetchTrackerPageContent = ({
  dispatch,
  teams = {},
  individuals = {},
  map = {}
}) => {
  const course = map.routes[0]

  return Promise.all([
    fetchTeams(dispatch)(process.env.CAMPAIGN_UID, process.env.FILTER_TEAMS.split(',')),
    fetchIndividuals(dispatch)(process.env.CAMPAIGN_UID),
    unlessFetched(course, () => fetchRoute(0, course.waypoints)(dispatch))
  ])
}

const hooks = {
  fetch: ({
    dispatch,
    teams,
    individuals,
    map
  }) => (
    fetchTrackerPageContent({
      dispatch,
      teams,
      individuals,
      map
    })
  )
}

const mapStateToProps = ({
  teams = {},
  individuals = {},
  map = {},
  routing = {}
}) => ({
  teams: teams.data,
  individuals: individuals.data,
  selected: map.selected,
  waypoint: map.selectedWaypoint,
  query: routing.locationBeforeTransitions ? routing.locationBeforeTransitions.query : {}
})

class TourTracker extends Component {
  componentWillReceiveProps (nextProps) {
    if (this.props.selected !== nextProps.selected) {
      this.props.router.push({
        pathname: ('/tracker'),
        query: {
          ...nextProps.query,
          id: nextProps.selected
        }
      })
    }

    if (this.props.waypoint !== nextProps.waypoint) {
      this.props.router.push({
        pathname: ('/tracker'),
        query: {
          ...nextProps.query,
          waypoint: nextProps.waypoint,
          id: undefined
        }
      })
    }
  }

  render () {
    return <TrackerLayout
      {...this.props}
    />
  }
}

export default withRouter(connect(mapStateToProps)(provideHooks(hooks)(TourTracker)))
