import React from 'react'
import styles from './styles.css'

const determineProgress = (target, current) => Math.round(current / target * 100)

export default ({
  current = 0,
  target = 5000
}) => (
  <div className={styles.progress}>
    <div className={styles.totals}>
      <div className={styles.current}>{`$${current}`}</div>
      <div className={styles.target}>{`$${target}`}</div>
    </div>
    <div className={styles.bar}>
      <span className={styles.barProgress} style={{width: `${determineProgress(target, current)}%`}}></span>
    </div>
  </div>
)
