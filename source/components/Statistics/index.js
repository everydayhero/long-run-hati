import React from 'react'
import numbro from 'numbro'
import CountDown from 'edh-widgets/src/components/events/CountDown'
import Loading from '../Loading'
import styles from './styles.css'

const format = (number) => numbro(number).format('0,0')

const calculateKms = teams => Math.round(teams.reduce((acc, t) => acc + (t.total_distance_in_meters / 1000), 0))

export default ({
  live = true,
  fundraisers = 0,
  raised = 0,
  teams
}) => (
  <div className={styles.base}>
    <div className={styles.metrics}>
      <div className={styles.section}>
        <div className={styles.total}>{format(fundraisers)}</div>
        <div className={styles.metric}>Fundraisers</div>
      </div>
      <div className={styles.section}>
        <div className={styles.total}>{`$${format(Math.round(raised / 100))}`}</div>
        <div className={styles.metric}>Raised So Far</div>
      </div>
      <div className={styles.section}>
        <div className={styles.total}>
          {teams ? format(teams.length) : <Loading align='left' />}
        </div>
        <div className={styles.metric}>Teams</div>
      </div>
      <div className={styles.section}>
        <div className={styles.total}>
          {teams ? `${format(calculateKms(teams))}km` : <Loading align='left' />}
        </div>
        <div className={styles.metric}>Distance Cycled So Far</div>
      </div>
    </div>
    {live ? (
      <div className={styles.countdown}>
        <CountDown
          date='2016-09-28'
          i18n={{ future_tense: {
            one: 'day remaining',
            other: 'days remaining'
          }}}
        />
      </div>
    ) : (
      <div className={styles.countdown}>Great Southern Crossing Challenge is now finished</div>
    )}
  </div>
)
