import React from 'react'

import Section from '../../components/Section'
import Container from '../../components/Container'
import Path from '../../components/Path'
import Button from '../../components/Button'
import Link from '../../components/Link'
import styles from './styles.css'

export default ({
  currentPage = '',
  registerLink
}) => (
  <Section>
    <div className={styles.base}>
      <Container theme='md'>
        <Button theme='primaryCaps'
          size='large'
          to={registerLink || `${currentPage}/?charitySearchModal`}>
          Register Now
        </Button>
        <p className={styles.donateText}>
          Can't join the race? <Link to={`${currentPage}/?pageSearchModal`}>Support a rider</Link>
        </p>
      </Container>
      <Path side='register' />
    </div>
  </Section>
)
