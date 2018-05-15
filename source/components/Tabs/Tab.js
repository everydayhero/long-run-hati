import React from 'react'
import styles from './styles.css'

export default ({children, selected}) => (
  <div className={`${styles.tabContent} ${selected ? styles.tabContentSelected : ''} `}>
    {children}
  </div>
)
