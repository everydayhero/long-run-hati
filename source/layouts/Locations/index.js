import React from 'react'
import { connect } from 'react-redux'

import {
  decrementCounter,
  incrementCounter
} from '../../store/actions/calculator'
import styles from './styles.css'
import Button from '../../components/Button'

const distributeDistance = (distance = 0, distribution = 1) => (
  Math.ceil((parseFloat(distance) / distribution) / 12)
)

const Locations = ({
  heading = '',
  image = {},
  locations = [],
  teamCount = 1,
  handleDecrement,
  handleIncrement
}) => (
  <div className={styles.root}>
    <h2 className={styles.heading}>{heading}</h2>
    <div className={styles.lead}>
      <h3 className={styles.label}>How many in your team?</h3>
      <div className={styles.cta}>
        <span className={styles.teamCounter}>
          <Button onClick={handleDecrement}
            theme='primary'
            disabled={teamCount <= 1}>
            <span className={styles.counterText}>-</span>
          </Button>
          <span className={styles.teamCount}>{teamCount}</span>
          <Button onClick={handleIncrement}
            theme='primary'
            disabled={teamCount >= 10}>
            <span className={styles.counterText}>+</span>
          </Button>
        </span>
        <Button theme='primary' href='https://registration.everydayhero.com/ps/event/RunIndia/EntryForm?id=21620&mode='>Create a team</Button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th className={styles.label}>Location</th>
          <th className={styles.distanceLabel}>Distance</th>
          <th className={styles.distanceLabel} title='Distance per person, per week'>pp/per week*</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location, i) => (
          <tr key={i}>
            <td className={styles.location}>{location.location}</td>
            <td className={styles.distance}>
              {parseFloat(location.distance)}km
            </td>
            <td className={styles.distance}>
              {distributeDistance(location.distance, teamCount)}km
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className={styles.footer}>*Weekly distance is calculated over 12 weeks</p>
  </div>
)

const mapStateToProps = ({
  calculator: {
    count
  } = { count: 1 }
}) => ({
  teamCount: count
})

export default connect(
  mapStateToProps,
  {
    handleDecrement: decrementCounter,
    handleIncrement: incrementCounter
  }
)(Locations)
