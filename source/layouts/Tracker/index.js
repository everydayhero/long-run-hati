import React from 'react'
import DocumentTitle from 'react-document-title'
import TrackerCard from '../TrackerCard'
import TrackerMap from '../TrackerMap'
import TrackerLeaderboards from '../TrackerLeaderboards'
import styles from './styles.css'

// @todo would like to access query params in connected component
//       but for some reason, I can't access using withRouter

export default ({ location = {} }) => (
  <DocumentTitle title='Great Southern Crossing'>
    <article className={styles.tracker}>
      <TrackerMap query={location.query} />
      <TrackerLeaderboards query={location.query} />
      <TrackerCard query={location.query} />
    </article>
  </DocumentTitle>
)
