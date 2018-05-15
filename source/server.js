import Document from './layouts/Document'
import DocumentTitle from 'react-document-title'
import React from 'react'
import routes from './Routes'
import { configureStore } from './store'
import { createServer } from 'boiler-room-runner'
import { renderToStaticMarkup } from 'react-dom/server'

const store = configureStore()

const basepath = process.env.BASE_PATH || '/'

const renderDocument = ({ content, state, assets }) => (
  '<!DOCTYPE html>' + renderToStaticMarkup(
    <Document title={DocumentTitle.rewind()} content={content} state={state} assets={assets} />
  )
)

const createLocals = ({ store }) => ({
  ...store.getState(),
  dispatch: store.dispatch
})

export default ({ assets }) => {
  const app = createServer({
    basepath,
    assets,
    routes,
    store,
    createLocals,
    renderDocument
  })

  app.staticRoutes = [
    '/',
    '/tracker',
    '/404'
  ]

  return app
}
