import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Leaderboard from '../../components/Leaderboard'
import { TabHeads, TabHead } from '../../components/Tabs'
import Bar from '../../components/Bar'
import styles from './styles.css'

const LEADERBOARDS = [
  {
    title: 'Team',
    icon: '$',
    type: 'teams',
    metric: 'funds-raised'
  },
  {
    title: 'Team',
    icon: 'KM',
    type: 'teams',
    metric: 'distance'
  },
  {
    title: 'Individual',
    icon: '$',
    type: 'individuals',
    metric: 'funds-raised'
  }
]

const renderTabs = ({
  router,
  query = {}
}) => {
  let { type = 'teams', metric = 'funds-raised' } = query
  return (
    <TabHeads>
      {LEADERBOARDS.map((tab, i) => (
        <TabHead
          key={i}
          selected={type === tab.type && metric === tab.metric}
          onClick={() => router.push({
            pathname: '/tracker',
            query: {
              ...query,
              type: tab.type,
              metric: tab.metric
            }
          })}
          {...tab}
        />
      ))}
    </TabHeads>
  )
}

const renderLeaderboard = ({
  teams = [],
  individuals = [],
  query = {},
  router
}) => (
  <Leaderboard
    title={`${query.type === 'individuals' ? 'Individual' : 'Team'} ${query.metric === 'distance' ? 'distance' : 'fundraising'}`}
    type={query.type}
    metric={query.metric}
    data={query.type === 'individuals' ? individuals : teams}
    selected={query.type === 'individuals' ? query.individual : query.id}
    entity={query.type === 'individuals' ? 'individuals' : 'teams'}
    filter={query.filter}
    onFilter={(val) => router.push({
      pathname: '/tracker',
      query: {
        ...query,
        filter: val
      }
    })}
  />
)

const renderToggleBar = ({ query = {}, router }) => {
  return (
    <Bar
      position='bottom'
      onClick={() => router.push({
        pathname: '/tracker',
        query: {
          ...query,
          panel: query.panel === 'leaderboard' ? 'map' : 'leaderboard'
        }
      })}
    >
      <span>Leaderboard</span>
      <span className={`fa fa-chevron-${query.panel === 'leaderboard' ? 'down' : 'up'} ${styles.icon}`}></span>
    </Bar>
  )
}

class TrackerLeaderboards extends React.Component {
  render () {
    let { query = {} } = this.props
    return (
      <div className={`${styles.wrapper} ${query.panel === 'leaderboard' ? styles.expanded : ''}`}>
        {renderToggleBar(this.props)}
        <div className={styles.leaderboards}>
          {renderTabs(this.props)}
          {renderLeaderboard(this.props)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({teams, individuals, routing}) => {
  return ({
    teams: teams.data,
    individuals: individuals.data,
    query: routing.locationBeforeTransitions ? routing.locationBeforeTransitions.query : {}
  })
}

export default withRouter(connect(mapStateToProps)(TrackerLeaderboards))
