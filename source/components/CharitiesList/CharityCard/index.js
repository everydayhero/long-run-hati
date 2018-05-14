import React from 'react'
import NavLink from '../../../components/NavLink'
import styles from './styles.css'

export default ({ image, link }) => (
  <div>
    <NavLink to={link}>
      <div className={styles.base}>
        <img className={styles.image} src={image} />
      </div>
    </NavLink>
  </div>
)
