import React from 'react'
import styles from './styles.css'

export default ({ children, align = 'center' }) => (
  <div className={`${styles.base} ${styles[align]}`}>
    <i className='fa fa-spin fa-spinner'></i>
  </div>
)
