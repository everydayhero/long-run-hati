import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TrackerShare from '../../components/TrackerShare'
import TrackerExit from '../../components/TrackerExit'
import Tracker from '../../components/Tracker'
import { push } from '../../store/actions/tracker'
import styles from './styles.css'

const TrackerMap = () => ({
  handleSelect: (router, query) => (team) => push(router)(query, { team }),

  render () {
    let {
      routes = [],
      metrics = {},
      query = {},
      router
    } = this.props

    return (
      <div className={styles.course}>
        <div className={styles.map}>
          <Tracker
            teams={metrics.teams}
            routes={routes}
            selected={query.team}
            charity={query.charity}
            onSelection={this.handleSelect(router, query)}
            interactive
          />
          <TrackerExit />
          <TrackerShare
            teams={metrics.teams}
            selected={query.team}
          />
        </div>
      </div>
    )
  }
})

const mapStateToProps = ({ metrics, tracker }) => ({
  routes: tracker.routes,
  metrics
})

export default withRouter(connect(mapStateToProps)(TrackerMap))
