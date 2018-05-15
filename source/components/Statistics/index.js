import React from 'react'
import CountDown from 'edh-widgets/src/components/events/CountDown'
import FundsRaised from 'edh-widgets/src/components/totals/FundsRaised'
import { Link } from 'react-router'
import Container from '../Container'
import styles from './styles.css'

const calculateKms = teams => Math.round(teams.reduce((acc, t) => acc + (t.distance / 1000), 0))

export default ({ teams = [], participants = 0 }) => (
  <div className={styles.updates}>
    <Container>
      <Link to='tracker' className={styles.live}>Live</Link>
      <ul className={styles.metrics}>
        <li>{`${teams.length} Teams`}</li>
        <li>{`${participants} Participants`}</li>
        <li>
          <FundsRaised
            campaignUid={process.env.CAMPAIGN_UID}
            i18n={{ title: 'Raised' }}
            renderIcon={false}
            format='0,0'
          />
        </li>
        <li>{`${calculateKms(teams)} kms Run`}</li>
      </ul>
      <div className={styles.countdown}>
        <CountDown
          date='2016-11-06'
          i18n={{ future_tense: {
            one: 'day remaining',
            other: 'days remaining'
          }}}
        />
      </div>
    </Container>
  </div>
)
