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
  id = 'cause',
  causeTitle = 'Your Cause',
  causeImage = { file: { url: '' } },
  causeImage2 = { file: { url: '' } },
  body,
  currentHash = '',
  currentPage = ''
}) => (
  <Section id={id} currentHash={currentHash}>
    <Container theme='md'>
      <div className={`${styles.base} ${currentPage ? styles.charity : styles.home}`}>
        <FloatingImages theme='cause'>
          <FloatingImage src={causeImage.file.url || '/layouts/Cause/default.jpg'} alt='' />
          <FloatingImage src={causeImage2.file.url || '/layouts/Cause/raised.jpg'} alt='' />
        </FloatingImages>
        <div className={styles.content}>
          <SectionTitle>{causeTitle}</SectionTitle>
          <div className={styles.textContent}>
            <TextContent dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
        {currentPage === '' ? <Path side='cause' /> : <Path side='charityCause' />}
      </div>
    </Container>
  </Section>
)
