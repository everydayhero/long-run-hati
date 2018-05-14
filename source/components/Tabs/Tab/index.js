import React from 'react'
import styles from './styles.css'

const getClass = ({selected, expandDesktop}) => `${styles.tabContent} ${selected ? styles.tabContentSelected : ''} ${expandDesktop ? styles.expand : ''}`

export default ({children, ...props}) => (
  <div className={getClass(props)}>
    {children}
  </div>
)
