import React from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import Card from '../../components/Card'
import styles from './styles.css'

const findTeam = (teams, id) => id && find(teams, o => o.id.toString() === id)

const TrackerCard = ({
  query = {},
  metrics = {}
}) => {
  let team = metrics.teams && findTeam(metrics.teams, query.team)

  return team ? (
    <Card
      className={styles.card}
      team={team}
    />
  ) : <span />
}

const mapStateToProps = ({ metrics }) => ({ metrics })

export default connect(mapStateToProps)(TrackerCard)
