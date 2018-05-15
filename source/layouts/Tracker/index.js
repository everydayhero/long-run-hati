import React from 'react'
import DocumentTitle from 'react-document-title'
import TrackerMap from '../TrackerMap'
import TrackerLeaderboards from '../TrackerLeaderboards'
import styles from './styles.css'

export default class extends React.Component {
  render () {
    let {
      location: { query },
      teams = [],
      individuals = []
    } = this.props

    return (
      <DocumentTitle title='Run India Tour Tracker'>
        <article className={styles.tracker}>
          <TrackerMap
            teams={teams}
            individuals={individuals}
            options={query}
          />
          <TrackerLeaderboards />
        </article>
      </DocumentTitle>
    )
  }
}
