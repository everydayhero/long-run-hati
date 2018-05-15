import React from 'react'
import styles from './styles.css'

export default ({
  children,
  position = 'top',
  onClick
}) => (
  <div
    className={`${styles.bar} ${styles[position]}`}
    onClick={onClick}
  >
    {children}
  </div>
)
