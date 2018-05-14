import React from 'react'
import styles from '../CharityCard/styles.css'

const props = {
  image: '/components/CharitiesList/images/yourcause.png',
  link: 'https://greatsoutherncrossing-2016.everydayhero.com/au/get-started'
}

export default () => (
  <a href={props.link}>
    <div className={styles.base}>
      <img className={styles.image} src={props.image} />
    </div>
  </a>
)
