import React from 'react'
import Icon from '../Icon'
import Path from '../Path'
import styles from './styles.css'

export default ({
  image,
  alt,
  final,
  icon,
  ...props
}) => (
  <div className={styles.base}>
    <div className={alt ? styles.innerAlt : styles.inner}>
      <div className={styles.circle}>
        <img className={styles.image} src={image} />
        <Icon icon={icon} />
      </div>
      <div className={styles.content} {...props} />
      {alt ? <Path side='stepAlt' /> : <Path side='step' />}
      {final && <Path side='stepFinal' />}
    </div>
  </div>
)
