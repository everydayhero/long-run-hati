import React from 'react'

import styles from './styles.css'
import Section from '../../components/Section'
import Container from '../../components/Container'

export default ({
  headings = [],
  body = '',
  featuredImage = {
    url: ''
  }
}) => (
  <Section>
    <div className={styles.headings}>
      <Container>
        {headings.map((heading, i) => (
          <div key={i} className={styles.heading}>{heading}</div>
        ))}
      </Container>
    </div>
    <div className={styles.content}>
      <Container className={styles.container}>
        <div className={styles.body}
          dangerouslySetInnerHTML={{
            __html: body
          }}
        />
        <div className={styles.featuredImage}
          style={{
            backgroundImage: `url(${featuredImage.url})`
          }} />
      </Container>
    </div>
  </Section>
)
