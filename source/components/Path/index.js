import React from 'react'
import styles from './styles.css'

export default ({
  side = 'left',
  ...props
}) => (
  <div {...props} className={styles[side]} />
)
