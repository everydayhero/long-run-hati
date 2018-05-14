import React from 'react'

import Section from '../../components/Section'
import SectionTitle from '../../components/SectionTitle'
import Container from '../../components/Container'
import TextContent from '../../components/TextContent'
import Prizes from '../../components/Prizes'
import Path from '../../components/Path'
import FloatingImages from '../../components/FloatingImages'
import FloatingImage from '../../components/FloatingImage'
import styles from './styles.css'

export default ({
  id = 'reward',
  body,
  currentHash = ''
}) => (
  <Section id={id} currentHash={currentHash}>
    <Container theme='md'>
      <div className={styles.base}>
        <FloatingImages theme='reward'>
          <FloatingImage src='/layouts/Reward/goal.jpg' alt='Man looking at beach holding bike in the air' />
          <FloatingImage src='/layouts/Reward/wiggle-logo.png' alt='Wiggle logo' />
        </FloatingImages>
        <div className={styles.content}>
          <SectionTitle>Results</SectionTitle>
          <div className={styles.textContent}>
            <TextContent dangerouslySetInnerHTML={{ __html: body }} />
            <Prizes />
          </div>
        </div>
        <Path side='reward' />
      </div>
    </Container>
  </Section>
)
