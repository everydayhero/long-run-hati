import React from 'react'

import styles from './styles.css'
import Section from '../../components/Section'
import Locations from '../Locations'
import Resources from '../Resources'

export default ({
  locations = {},
  resources = {}
}) => (
  <Section className={styles.root} style={{
    backgroundImage: `url(${resources.image.url || ''})`
  }}>
    <div className={styles.container}>
      <Locations {...locations} />
      <Resources {...resources} />
    </div>
  </Section>
)
