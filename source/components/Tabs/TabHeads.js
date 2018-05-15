import React from 'react'
import styles from './styles.css'

export default ({children}) => (
  <ul className={styles.tabs}>
    {children}
  </ul>
)
