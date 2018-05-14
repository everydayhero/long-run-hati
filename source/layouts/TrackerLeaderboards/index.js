import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push, pushToggle } from '../../store/actions/tracker'
import Bar from '../../components/Bar'
import Filter from '../../components/Filter'
import { Leaderboard } from '../../components/Leaderboards'
import { Toggle, ToggleItem } from '../../components/Toggle'
import styles from './styles.css'
import { defaultParams, isExpanded, getType } from '../../utils/tracker'

import {
  PANEL_MAP,
  PANEL_LEADERBOARD,
  TYPE_TEAMS,
  TYPE_INDIVIDUALS,
  METRIC_POSITION,
  METRIC_RAISED,
  METRIC_DISTANCE
} from '../../utils/constants'

const TrackerLeaderboards = (props) => ({
  props,

  handleToggleClick: (router, query) => () => pushToggle(router)(query),

  handleTypeClick: (router, query, type) => () => push(router)(query, {
    type,
    metric: type === TYPE_TEAMS ? METRIC_POSITION : METRIC_RAISED
  }),

  handleMetricClick: (router, query, metric) => () => push(router)(query, { metric }),

  handleFilter: (router, query) => (filter) => push(router)(query, { filter }),

  handleSelect: (router, query) => (team, individual) => push(router)(query, { team, individual, panel: PANEL_MAP }),

  render () {
    let { query, router, metrics = {} } = this.props

    let params = {
      ...defaultParams,
      ...query
    }

    let expanded = isExpanded(params)

    return (
      <div className={`${styles.wrapper} ${expanded ? styles.expanded : ''}`}>
        <Bar onClick={this.handleToggleClick(router, params)}>
          <span>Leaderboard</span>
          <span className={`fa fa-chevron-${expanded ? 'down' : 'up'} ${styles.icon}`} />
        </Bar>
        <div className={styles.leaderboards}>
          <Toggle size='sm' theme='primary'>
            <ToggleItem
              selected={params.type === TYPE_TEAMS}
              onClick={this.handleTypeClick(router, params, TYPE_TEAMS)}
              children='Teams'
            />
            <ToggleItem
              selected={params.type === TYPE_INDIVIDUALS}
              onClick={this.handleTypeClick(router, params, TYPE_INDIVIDUALS)}
              children='Individuals'
            />
          </Toggle>
          <Toggle size='sm' theme='primary'>
            {params.type === TYPE_TEAMS && (
              <ToggleItem
                selected={params.metric === METRIC_POSITION}
                onClick={this.handleMetricClick(router, params, METRIC_POSITION)}
                children='Position'
              />
            )}
            <ToggleItem
              selected={params.metric === METRIC_RAISED}
              onClick={this.handleMetricClick(router, params, METRIC_RAISED)}
              children='Funds Raised'
            />
            <ToggleItem
              selected={params.metric === METRIC_DISTANCE}
              onClick={this.handleMetricClick(router, params, METRIC_DISTANCE)}
              children='Cycled'
            />
          </Toggle>
          {params.metric === METRIC_POSITION && (
            <div className={styles.description}>
              Position is calculated using distance cycled, <strong>plus 1km for every $5 raised</strong>.
            </div>
          )}
          <Filter
            onChange={this.handleFilter(router, params)}
            placeholder={`Filter ${getType(params)}`}
            value={params.filter}
          />
          <Leaderboard
            data={params.type === TYPE_INDIVIDUALS ? metrics.individuals : metrics.teams}
            type={getType(params) }
            metric={params.metric}
            filter={params.filter}
            selected={params.type === TYPE_INDIVIDUALS ? params.individual : params.team}
            onSelect={this.handleSelect(router, params)}
          />
        </div>
      </div>
    )
  }
})

const mapStateToProps = ({ metrics }) => ({ metrics })

export default withRouter(connect(mapStateToProps)(TrackerLeaderboards))
