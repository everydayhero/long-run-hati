import React from 'react'
import { Link } from 'react-router'
import Icon from '../Icon'
import styles from './styles.css'

export default () => (
  <Link className={styles.base} to={`${process.env.BASE_PATH ||'/'}`}>
    <Icon icon='thin-close' />
  </Link>
)
