import React from 'react'

import Section from '../../components/Section'
import Path from '../../components/Path'
import TextContent from '../../components/TextContent'
import styles from './styles.css'

export default ({
  id = 'intro',
  body,
  currentHash = ''
}) => (
  <Section id={id} currentHash={currentHash}>
    <div className={styles.base}>
      <TextContent className={styles.text} dangerouslySetInnerHTML={{ __html: body }} />
      <Path side='intro' />
    </div>
  </Section>
)
