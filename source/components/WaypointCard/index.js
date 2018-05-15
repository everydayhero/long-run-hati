import React from 'react'
import styles from './styles.css'

export default ({
  className = '',
  waypoint = {}
}) => (
  <section className={`${className} ${styles.card}`}>
    <div className={styles.detail}>
      <h6 className={styles.title}>{waypoint.name}</h6>
      <p className={styles.kms}>{`${waypoint.kms} km`}</p>
    </div>
  </section>
)
