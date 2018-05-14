import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import * as actions from '../../store/actions/leaderboards'
import { Leaderboard } from '../../components/Leaderboards'
import Button from '../../components/Button'
import { Tabs, Tab } from '../../components/Tabs'
import { Toggle, ToggleItem } from '../../components/Toggle'
import styles from './styles.css'

import {
  TRACKER_PATH,
  TYPE_TEAMS,
  TYPE_INDIVIDUALS,
  METRIC_POSITION,
  METRIC_RAISED,
  METRIC_DISTANCE,
  TOOLTIP
} from '../../utils/constants'

const HomeLeaderboards = ({
  metrics = {},
  leaderboards = {},
  charity,
  ...props
}) => {
  let { individualMode, tab } = leaderboards

  const handleSelect = (type, metric) => (team, individual) => {
    props.router.push({
      pathname: `${process.env.BASE_PATH || '/'}${TRACKER_PATH}`,
      query: {
        type,
        metric,
        team,
        individual
      }
    })
  }

  const handleChange = (i) => () => props.changeTabs(i)

  const renderLeaderboards = () => {
    let leaderboards = [
      {
        title: 'Position',
        metric: METRIC_POSITION,
        onSelect: handleSelect(individualMode ? TYPE_INDIVIDUALS : TYPE_TEAMS, METRIC_POSITION),
        exclude: individualMode
      },
      {
        title: 'Funds Raised',
        metric: METRIC_RAISED,
        onSelect: handleSelect(individualMode ? TYPE_INDIVIDUALS : TYPE_TEAMS, METRIC_RAISED)
      },
      {
        title: 'Cycled',
        metric: METRIC_DISTANCE,
        onSelect: handleSelect(individualMode ? TYPE_INDIVIDUALS : TYPE_TEAMS, METRIC_DISTANCE)
      }
    ]

    return leaderboards.filter(({exclude}) => !exclude).map(({title, ...props}, i) => (
      <Tab key={i} title={title}>
        <Leaderboard
          theme='home'
          type={individualMode ? TYPE_INDIVIDUALS : TYPE_TEAMS}
          data={individualMode ? metrics.individuals : metrics.teams}
          limit={5}
          {...props}
        />
      </Tab>
    ))
  }

  return (
    <section className={styles.base}>
      <div className={styles.inner}>
        <h2 className={styles.topTitle}>Leaderboard</h2>
        <p className={styles.tip}>Position is calculated using distance cycled, <strong>plus 1km for every $5 raised</strong>.</p>
        <div className={styles.top}>
          <div>
            <Toggle>
              <ToggleItem
                onClick={e => props.toggleLeaderboards(TYPE_TEAMS)}
                selected={!individualMode}
                children='Teams'
              />
              <ToggleItem
                onClick={e => props.toggleLeaderboards(TYPE_INDIVIDUALS)}
                selected={individualMode}
                children='Individuals'
              />
            </Toggle>
          </div>
          <div>
            <Button to={`/tracker?panel=leaderboard${charity ? `&charity=${charity}` : ''}`} theme='dark'>
              Full Leaderboard <i className='fa fa-chevron-right'></i>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.leaderboards}>
        <Tabs selected={tab} onChange={handleChange} expandDesktop>
          { renderLeaderboards() }
        </Tabs>
      </div>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({ ...bindActionCreators(actions, dispatch) })

const mapStateToProps = ({ metrics, leaderboards }) => ({ metrics, leaderboards })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeLeaderboards))
