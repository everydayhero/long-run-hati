import React from 'react'
import { sortBy } from 'lodash'
import LeaderboardItem from '../LeaderboardItem'
import Loading from '../../Loading'
import styles from './styles.css'

import {
  METRIC_POSITION,
  METRIC_DISTANCE,
  TYPE_TEAMS
} from '../../../utils/constants'

const calculateAmount = (item, metric) => {
  switch (metric) {
    case METRIC_DISTANCE:
      return item.total_distance_in_meters * -1
    case METRIC_POSITION:
      return item.position
    default:
      return item.total_amount_cents * -1
  }
}

const sortResults = (data, metric) => (
  sortBy(data, o => calculateAmount(o, metric))
)

const filterResults = (data, filter) => (
  filter ?
    data.map(item => ({
      ...item,
      hidden: item.name.toLowerCase().indexOf(filter.toLowerCase()) === -1
    })) : data
)

const limitResults = (data, limit) => (
  limit ?
    data.slice(0, limit) : data
)

export default ({
  data,
  className = '',
  theme,
  type,
  metric,
  limit,
  filter,
  selected,
  onSelect = function() {}
}) => {
  if (!data) {
    return (
      <div className={className}>
        <Loading />
      </div>
    )
  } else {
    let sorted = sortResults(data, metric)
    let filtered = filterResults(sorted, filter)
    let results = limitResults(filtered, limit)

    return (
      <div className={className}>
        <ol>
          {results.length ? (
            results.map((item, i) => (
              <LeaderboardItem
                key={i}
                position={i + 1}
                item={item}
                team={type === TYPE_TEAMS ? item.id : item.team_id}
                type={type}
                metric={metric}
                hidden={filter && item.hidden}
                selected={item.id.toString() === selected}
                onClick={onSelect}
                theme={theme}
              />
            ))
          ) : <li className={styles.empty}>No data available</li>}
        </ol>
      </div>
    )
  }
}
