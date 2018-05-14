import React from 'react'
import styles from './styles.css'

export default ({
  ...props
}) => (
  <h2 {...props} className={styles.base} />
)
