import React from 'react'
import NavLink from '../NavLink'
import styles from './styles.css'

export default (props) => (
  <NavLink {...props} className={styles.base} />
)
