import React from 'react'
import DocumentTitle from 'react-document-title'
import styles from './styles.css'

import Footer from '../Footer'
import Header from '../Header'

export default ({
  title = 'Run India',
  header = {},
  footer = {},
  children
}) => (
  <DocumentTitle title={title}>
    <article className={styles.base}>
      <Header
        {...header}
      />
      {children}
      <Footer
        {...footer}
    />
    </article>
  </DocumentTitle>
)
