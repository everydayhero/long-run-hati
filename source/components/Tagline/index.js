import React from 'react'
import styles from './styles.css'

export default ({
  upperTagline = '',
  middleTagline = '',
  lowerTagline = ''
}) => (
  <div className={styles.base}>
    <div
      className={styles.intro}
      dangerouslySetInnerHTML={{ __html: upperTagline }}
    />
    <div
      className={styles.main}
      dangerouslySetInnerHTML={{ __html: middleTagline }}
    />
    <div
      className={styles.date}
      dangerouslySetInnerHTML={{ __html: lowerTagline }}
    />
  </div>
)
