import React from 'react'

import styles from './styles.css'
import Section from '../../components/Section'
import Container from '../../components/Container'
import Step from '../../components/Step'

export default ({
  heading = '',
  steps = []
}) => (
  <Section>
    <div className={styles.header}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
      </Container>
    </div>
    <Container className={styles.steps}>
      {steps.map((step, i) => (
        <Step {...step} count={i + 1} key={i} />
      ))}
    </Container>
  </Section>
)
