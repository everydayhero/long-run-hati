import React from 'react'

import Section from '../../components/Section'
import SectionTitle from '../../components/SectionTitle'
import Path from '../../components/Path'
import Container from '../../components/Container'
import CharitiesList from '../../components/CharitiesList'
import styles from './styles.css'

export default ({ charities = [], id = 'charities', currentHash = '' }) => (
  <Section id='charities' theme='faceted' currentHash={currentHash}>
    <Container theme='md'>
      <div className={styles.base}>
        <SectionTitle>Featured Charities</SectionTitle>
        <CharitiesList charities={charities} />
        <Path side='charities' />
      </div>
    </Container>
  </Section>
)
