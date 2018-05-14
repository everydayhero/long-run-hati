import { updateOrAddResource } from '../../../utils/collectionHelpers'
import marked from 'marked'
import _ from 'lodash'

const updateOrAddPage = updateOrAddResource('route')

const fetchPage = (pages, { route }) => {
  return {
    ...pages,
    data: updateOrAddPage(pages.data, { route, status: 'fetching' })
  }
}

const receivePageFailure = (pages, { route, error = '' }) => {
  return {
    ...pages,
    data: updateOrAddPage(pages.data, { route, error, status: 'failed' })
  }
}

const receivePageSuccess = (pages, { route, content = {} }) => {
  content = _.mapValues(content, (field) => {
    return marked(field)
  })
  return {
    ...pages,
    data: updateOrAddPage(pages.data, { route, content, status: 'fetched' })
  }
}

export default (pages = { data: [] }, { type, payload }) => {
  switch (type) {
    case 'FETCH_PAGE':
      return fetchPage(pages, payload)
    case 'RECEIVE_PAGE_FAILURE':
      return receivePageFailure(pages, payload)
    case 'RECEIVE_PAGE_SUCCESS':
      return receivePageSuccess(pages, payload)
    default:
      return pages
  }
}
