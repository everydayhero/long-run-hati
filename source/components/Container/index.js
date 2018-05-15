import React from 'react'

import styles from './styles.css'

export default ({ children, className, ...props }) => (
  <div className={`${styles.base} ${className}`} {...props}>
    {children}
  </div>
)
