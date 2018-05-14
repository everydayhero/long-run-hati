import React from 'react'

import Section from '../../components/Section'
import Container from '../../components/Container'
import Path from '../../components/Path'
import styles from './styles.css'

export default ({
  id = 'inspiration',
  body,
  currentHash = ''
}) => (
  <Section id={id} currentHash={currentHash} theme='higher'>
    <div className={styles.base}>
      <Container theme='md'>
        <div className={styles.content}
          dangerouslySetInnerHTML={{ __html: body }} />
        <Path side='inspiration' />
      </Container>
    </div>
  </Section>
)
