import React from 'react'
import ToggleItem from '../ToggleItem'
import styles from './styles.css'

export default ({ children, size = 'md', theme = 'light' }) => (
  <ul className={`${styles.base} ${styles[size]} ${styles[theme]}`}>
    {children.map((item, i) => item && (
      <ToggleItem key={i} {...item.props} theme={theme} />
    ))}
  </ul>
)
