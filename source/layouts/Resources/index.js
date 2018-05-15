import React from 'react'

import styles from './styles.css'
import Section from '../../components/Section'

export default ({
  image,
  resources = []
}) => (
  <Section className={styles.root} style={{
    backgroundImage: `url(${image.url})`
  }}>
    <div className={styles.content}>
      <h2 className={styles.heading}>Resources</h2>
      <ul className={styles.list}>
        {resources.map((r, i) => (
          <li className={styles.item} key={i}><a tagert='_blank' className={styles.link} href={r.url}>{r.title}</a></li>
        ))}
      </ul>
    </div>
  </Section>
)
