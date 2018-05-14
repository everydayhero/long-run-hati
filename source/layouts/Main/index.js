import React from 'react'
import DocumentTitle from 'react-document-title'

import Footer from '../Footer'
import styles from './styles.css'

export default ({
  title = 'The Great Southern Crossing',
  children
}) => (
  <DocumentTitle title={title}>
    <article className={styles.base}>
      {children}
      <Footer />
    </article>
  </DocumentTitle>
)
