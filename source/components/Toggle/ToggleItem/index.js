import React from 'react'
import styles from './styles.css'

export default ({ children, onClick, selected, theme }) => (
  <li
    onClick={onClick}
    className={`${styles.item} ${styles[theme]} ${selected ? styles.selected : ''}`}
  >
    {children}
  </li>
)
