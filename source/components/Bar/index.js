import React from 'react'
import styles from './styles.css'

export default ({
  children,
  onClick
}) => (
  <div
    className={`${styles.bar}`}
    onClick={onClick}
  >
    {children}
  </div>
)
