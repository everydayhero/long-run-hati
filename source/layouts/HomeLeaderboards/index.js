import React from 'react'
import { Link } from 'react-router'
import Leaderboard from '../../components/Leaderboard'
import Container from '../../components/Container'
import Section from '../../components/Section'
import { Tabs, Tab } from '../../components/Tabs'
import styles from './styles.css'

export default ({
  image = {},
  teams,
  individuals
}) => (
  <Section className={styles.section} style={{ backgroundImage: `url(${image.url})` }}>
    <div className={styles.base}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Leaderboards</h2>
          <Link to='/tracker' className={styles.largeLink}>Full Leaderboard <i className='fa fa-chevron-right'></i></Link>
        </div>
        <Tabs expandDesktop>
          <Tab title='Teams' icon='$'>
            <Leaderboard
              title='Team fundraising'
              type='teams'
              metric='funds-raised'
              data={teams}
              limit={5}
            />
          </Tab>

          <Tab title='Team' icon='KM'>
            <Leaderboard
              title='Team distance'
              type='teams'
              metric='distance'
              data={teams}
              limit={5}
            />
          </Tab>

          <Tab title='Individual' icon='$'>
            <Leaderboard
              title='Individual fundraising'
              type='individuals'
              metric='funds-raised'
              data={individuals}
              limit={5}
            />
          </Tab>

        </Tabs>
        <Link to='/tracker' className={styles.smallLink}>Full Leaderboard <i className='fa fa-chevron-right'></i></Link>
      </Container>
    </div>
  </Section>
)
