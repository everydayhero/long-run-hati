import React from 'react'
import styles from './styles.css'
import {
  TYPE_INDIVIDUALS,
  TYPE_TEAMS,
  METRIC_DISTANCE,
  METRIC_POSITION
} from '../../../utils/constants'

const getClass = ({ position, selected, hidden, metric, theme = 'tracker' }, finished) => (
  `${styles.base}
  ${styles[theme]}
  ${metric === METRIC_POSITION ? styles[`pos-${position}`] : ''}
  ${selected ? styles.selected : ''}
  ${hidden ? styles.hidden : ''}
  ${finished ? styles.finished : ''}`
)

const calculateTotal = (item, metric) => {
  switch (metric) {
    case METRIC_DISTANCE:
      return `${Math.round(item.total_distance_in_meters / 1000)} km`
    case METRIC_POSITION:
      return item.passed_threshold_at ? 'Finished' : `${Math.round(item.total_threshold_value / 1000)} km`
    default:
      return `$${Math.round(item.total_amount_cents / 100)}`
  }
}

export default (props) => {
  let {
    position,
    item = {},
    team,
    type,
    metric,
    onClick
  } = props

  const total = calculateTotal(item, metric)
  const handleClick = (team, id) => () => onClick(team, type === TYPE_INDIVIDUALS && id)

  return (
    <li
      className={getClass(props, total === 'Finished')}
      onClick={handleClick(team, item.id)}
    >
      <span className={styles.position}>
        <span className={styles.number}>{position}</span>
      </span>
      <span className={styles.image}>
        <img src={item.image_url} alt={item.name} />
      </span>
      <span className={styles.name}>
        {item.name}
        {item.charity_name && (
          <span className={styles.charity}>{item.charity_name}</span>
        )}
      </span>
      <span className={styles.total}>{total}</span>
    </li>
  )
}
