import React from 'react'
import styles from './styles.css'

export default ({
  theme = 'base',
  ...props
}) => (
  <div {...props} className={styles[theme]} />
)
