import React from 'react'

import Section from '../../components/Section'
import SectionTitle from '../../components/SectionTitle'
import Container from '../../components/Container'
import Step from '../../components/Step'
import styles from './styles.css'

export default ({
  id = 'steps',
  currentHash = '',
  register = '',
  connect = '',
  cycle = ''
}) => {
  return (
    <Section id={id} currentHash={currentHash}>
      <Container theme='md'>
        <div className={styles.base}>
          <SectionTitle>Get Started</SectionTitle>
          <div className={styles.steps}>
            <Step image='/Routes/Home/images/register-blue.jpg'
              icon='register-tick'
              dangerouslySetInnerHTML={{ __html: register }} />
            <Step image='/Routes/Home/images/connect-blue.jpg'
              icon='connect-spinner'
              alt
              dangerouslySetInnerHTML={{ __html: connect }} />
            <Step image='/Routes/Home/images/cycling-blue.jpg'
              icon='cycling-bike'
              final
              dangerouslySetInnerHTML={{ __html: cycle }} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
