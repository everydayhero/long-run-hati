import React from 'react'

import Section from '../../components/Section'
import SectionTitle from '../../components/SectionTitle'
import Container from '../../components/Container'
import TextContent from '../../components/TextContent'
import Path from '../../components/Path'
import FloatingImages from '../../components/FloatingImages'
import FloatingImage from '../../components/FloatingImage'
import styles from './styles.css'

export default ({
  id = 'race',
  body,
  currentHash = ''
}) => (
  <Section id={id} currentHash={currentHash}>
    <Container theme='md'>
      <div className={styles.base}>
        <FloatingImages theme='race'>
          <FloatingImage src='/layouts/Race/bikes-on-road.jpg' alt='Bikes riding along a road'/>
          <FloatingImage src='/layouts/Race/rider-with-jersey.jpg' alt='Rider wear a Great Southern Crossing Jerse'/>
        </FloatingImages>
        <div className={styles.content}>
          <SectionTitle>The Challenge</SectionTitle>
          <div className={styles.textContent}>
            <TextContent dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
        <Path side='race' />
      </div>
    </Container>
    <div className={styles.route}>
      <Container theme='md'>
        <img className={styles.map}
          src='/layouts/Race/route.svg'
          alt='The route for Great Southern Crossing. 5,200 kms.' />
        <Path side='route' />
      </Container>
    </div>
  </Section>
)
