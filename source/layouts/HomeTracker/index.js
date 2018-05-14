import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'
import Button from '../../components/Button'
import Statistics from '../../components/Statistics'
import Tracker from '../../components/Tracker'
import styles from './styles.css'

const fromDate = moment.utc('2016-09-01T00:00:00+10:00')
const toDate = moment.utc('2016-09-28T24:00:00+10:00')

const HomeTracker = ({
  campaign = {},
  routes = [],
  teams,
  charity,
  totalKms
}) => {
  const {
    page_count,
    funds_raised
  } = campaign
  const tracker = `/tracker${charity ? `?charity=${charity}` : ''}`
  const live = moment.utc().isBetween(fromDate, toDate)
  return (
    <section className={styles.base}>
      <div className={styles.inner}>
        <div className={styles.stats}>
          <div className={styles.banner}>
            <div className={styles.eventStatus}>
              <span className={styles.eventStatusText}>
                {live ? 'Live' : 'Ended'}
              </span>
              {live && <span className={styles.flasher} />}
            </div>
            <Button to={tracker} theme='dark'>
              See Detailed Map <i className='fa fa-chevron-right'></i>
            </Button>
          </div>
          <Statistics
            teams={teams}
            live={live}
            teams={teams}
            fundraisers={page_count}
            raised={funds_raised && funds_raised.cents}
          />
        </div>
        <div>
          <Link className={styles.mapLink} to={tracker}>
            <div className={styles.map}>
              <Tracker
                teams={teams}
                routes={routes}
                charity={charity}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ campaign, tracker, metrics = {} }) => ({
  routes: tracker.routes,
  campaign: campaign.campaign,
  teams: metrics.teams
})

export default connect(mapStateToProps)(HomeTracker)
