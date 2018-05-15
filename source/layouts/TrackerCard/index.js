import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card'
import WaypointCard from '../../components/WaypointCard'
import styles from './styles.css'

class TrackerCard extends React.Component {

  renderTourer (team) {
    return (
      <Card
        className={styles.card}
        team={team}
      />
    )
  }

  renderWaypoint (waypoint) {
    return (
      <WaypointCard
        className={`${styles.card} ${styles.waypointCard}`}
        waypoint={waypoint}
      />
    )
  }

  render () {
    let { selected, waypoint } = this.props
    return selected ? this.renderTourer(selected) : (
      waypoint ? this.renderWaypoint(waypoint) : <span />
    )
  }
}

const mapStateToProps = state => ({
  selected: state.teams.selected,
  waypoint: state.waypoints.selected
})

export default connect(mapStateToProps)(TrackerCard)
