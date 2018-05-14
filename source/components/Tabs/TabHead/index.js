import React from 'react'
import styles from './styles.css'

const getClass = ({selected, expandDesktop, count}) => `${styles.tab} ${styles[`tabCount${count}`]} ${selected ? styles.tabSelected : ''} ${expandDesktop ? styles.expand : ''}`

export default ({
  onClick,
  title,
  ...props
}) => (
  <li className={getClass(props)} onClick={onClick} >
    {title}
  </li>
)
