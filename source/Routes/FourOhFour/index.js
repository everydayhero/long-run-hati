import DocumentTitle from 'react-document-title'
import React from 'react'

import Main from '../../layouts/Main'
import styles from './styles.css'

export default () => (
  <DocumentTitle title="404">
    <Main title="404">
      <section className={ styles.FourOhFour }>
        <div>Whoops!</div>
      </section>
    </Main>
  </DocumentTitle>
)
