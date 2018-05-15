import React from 'react'

import styles from './styles.css'

export default ({
  className,
  count = '',
  image = {},
  heading = '',
  body = '',
  ...props
}) => (
  <div className={`${styles.base} ${className}`} {...props}>
    <div className={styles.hero}>
      <div className={styles.count}>{count}</div>
      <img className={styles.image} src={image.url || ''} />
    </div>
    <div className={styles.content}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.body}
        dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </div>
)
