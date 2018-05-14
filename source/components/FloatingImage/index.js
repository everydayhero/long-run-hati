import React from 'react'
import styles from './styles.css'

export default ({
  ...props
}) => (
  <div className={styles.base}>
    <div className={styles.wrapper}>
      <img {...props} className={styles.img} />
    </div>
  </div>
)
