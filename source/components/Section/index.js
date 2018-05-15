import React from 'react'

import styles from './styles.css'

export default ({
  className = '',
  theme = '',
  ...props
}) => (
  <section {...props}
    className={`${styles.base} ${styles[theme]} ${className}`} />
)
