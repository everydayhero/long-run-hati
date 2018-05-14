import React from 'react'
import styles from './styles.css'

export default ({children}) => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      <ul className={styles.tabs}>
        {children}
      </ul>
    </div>
  </div>
)
