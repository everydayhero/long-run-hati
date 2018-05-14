import React from 'react'

import Container from '../../components/Container'
import SocialFeed from '../SocialFeed'
import Icon from '../../components/Icon'
import styles from './styles.css'

export default () => (
  <footer className={styles.base}>
    <Container theme='md'>
      <div className={styles.social}>
        <h2 className={styles.heading}>Clip in and <span className={styles.hashTag}>#crosswithus</span></h2>
        <div className={styles.icons}>
          <a className={styles.instagram} href='https://www.instagram.com/greatsouthernX/' title='Great Southern Crossing on Instagram'>
            <Icon icon='instagram' />
          </a>
          <a className={styles.facebook} href='https://business.facebook.com/events/1676234732616127/' title='Great Southern Crossing on Facebook'>
            <Icon icon='facebook' />
          </a>
          <a className={styles.twitter} href='https://twitter.com/GreatSouthernX' title='Great Southern Crossing on Twitter'>
            <Icon icon='twitter' />
          </a>
        </div>
      </div>
      <SocialFeed />
    </Container>
    <div className={styles.bottom}>
      <Container theme='md'>
        <p>
          Fundraising powered by
          <img className={styles.logo} src='/layouts/Footer/everydayhero.png' />
        </p>
        <p className={styles.links}>
          <a href='https://everydayhero.com/au/terms/privacy'>Privacy Policy</a>
          <a href='/layouts/Footer/2016-terms-and-conditions.pdf' target='_blank'>Terms &amp; Conditions</a>
          <a href='https://supporter.help-au.everydayhero.com/hc/en-us/sections/200835326-Great-Southern-Crossing-Charity-Challenge'>Help</a>
        </p>
      </Container>
    </div>
  </footer>
)
