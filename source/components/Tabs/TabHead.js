import React from 'react'
import styles from './styles.css'

export default ({
  selected,
  onClick,
  icon,
  title
}) => (
  <li
    className={`${styles.tab} ${selected ? styles.tabSelected : ''}`}
    onClick={onClick}
  >
    {icon && (
      <div className={styles.tabIcon}>{icon}</div>
    )}
    <div>{title}</div>
  </li>
)
