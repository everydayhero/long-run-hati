import React from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

export default ({
  position,
  name,
  image,
  total,
  url,
  selected,
  hidden
}) => (
  <li className={`${styles.item} ${hidden ? styles.hidden : ''} ${selected ? styles.selected : ''}`}>
    <Link to={url} className={styles.link}>
      <span className={styles.position}>{`${position}.`}</span>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.total}>{total}</span>
    </Link>
  </li>
)
