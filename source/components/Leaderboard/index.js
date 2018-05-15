import React from 'react'
import { sortBy } from 'lodash/collection'
import Filter from '../Filter'
import LeaderboardItem from '../LeaderboardItem'
import Loading from '../Loading'
import styles from './styles.css'

const MAP_TYPES = {
  'funds-raised': 'raised_in_cents',
  'distance': 'distance'
}

const prepareLeaders = (data = [], options) => {
  const items = sortBy(data, MAP_TYPES[options.metric])
    .reverse()
    .map(item => ({
      ...item,
      hidden: options.filter && item.name.toLowerCase().search(options.filter.toLowerCase()) === -1
    }))
  return options.limit ? items.slice(0, options.limit) : items
}

const getTotal = (item, metric) => {
  let value = MAP_TYPES[metric]
  switch (metric) {
    case 'distance':
      return `${Math.round(item[value] / 1000) || 0}km`
    default:
      return `$${Math.round(item[value] / 100) || 0}`
  }
}

const renderLeaders = ({
  data = [],
  metric = 'funds-raised',
  type = 'teams',
  selected,
  limit = 0,
  filter
}) => {
  if (data.length) {
    let items = prepareLeaders(data, {
      metric,
      limit,
      filter
    })

    return (
      <ol className={styles.listing}>
        {items.map((item, i) => {
          let individual = type === 'individuals' ? item.id : undefined
          let id = type === 'individuals' ? item.team_id : item.id
          return (
            <LeaderboardItem
              key={i}
              position={i + 1}
              name={item.name}
              image={item.avatar_url}
              total={getTotal(item, metric)}
              url={{
                pathname: '/tracker',
                query: {
                  type,
                  metric,
                  id,
                  individual,
                  filter
                }
              }}
              hidden={item.hidden}
              selected={item && item.id && item.id.toString() === selected}
            />
          )
        })}
      </ol>
    )
  } else {
    return <Loading />
  }
}

const renderTitle = ({title}) => (
  title && (
    <h3 className={styles.title}>{title}</h3>
  )
)

const renderFilter = ({onFilter, entity}) => (
  onFilter && (
    <Filter
      onChange={onFilter}
      placeholder={`Filter ${entity}`}
    />
  )
)

export default (props) => (
  <div className={styles.base}>
    {renderTitle(props)}
    {renderFilter(props)}
    {renderLeaders(props)}
  </div>
)
