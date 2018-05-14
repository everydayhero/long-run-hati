import React from 'react'
import styles from './styles.css'

export default ({
  theme = 'base',
  className = {},
  ...props
}) => (
  <div {...props} className={`${className} ${styles[theme]}`} />
)
