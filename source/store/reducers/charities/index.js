import { find, get } from 'lodash'
import marked from 'marked'
import { updateOrAddResource, mergeCollections } from '../../../utils/collectionHelpers'

const updateOrAddCharity = updateOrAddResource('slug')
const mergeCharityCollections = mergeCollections('slug')

const deserializeCharities = ({
  items = [],
  includes = {}
} = {}) => (
  items.map(({ fields = {} }) => {
    const {
      introduction = '',
      cause = '',
      logo: logoRef,
      causeImage: causeImageRef,
      causeImage2: causeImage2Ref
    } = fields

    const logo = find(
      includes.Asset || [],
      (asset) => asset.sys.id === logoRef.sys.id
    ) || {}

    const causeImage = find(
      includes.Asset || [],
      (asset) => asset.sys.id === get(causeImageRef, 'sys.id', null)
    ) || {}

    const causeImage2 = find(
      includes.Asset || [],
      (asset) => asset.sys.id === get(causeImage2Ref, 'sys.id', null)
    ) || {}

    return {
      ...fields,
      introduction: marked(introduction),
      cause: marked(cause),
      logo: logo.fields,
      causeImage: causeImage.fields,
      causeImage2: causeImage2.fields
    }
  })
)

const fetchCharities = (charities) => ({
  ...charities,
  status: 'fetching'
})

const receiveCharitiesFailure = (charities, { error }) => ({
  ...charities,
  status: 'failed',
  error
})

const receiveCharitiesSuccess = (charities, { data }) => ({
  ...charities,
  status: 'fetched',
  error: null,
  data: mergeCharityCollections(charities.data, deserializeCharities(data))
})

const fetchCharity = (charities, { slug }) => {
  return {
    ...charities,
    data: updateOrAddCharity(charities.data, { slug, status: 'fetching' })
  }
}

const receiveCharityFailure = (charities, { slug, error = '' }) => {
  return {
    ...charities,
    data: updateOrAddCharity(charities.data, { slug, error, status: 'failed' })
  }
}

const receiveCharitySuccess = (charities, { slug, content = '' }) => {
  return {
    ...charities,
    data: updateOrAddCharity(charities.data, { slug, content, error: null, status: 'fetched' })
  }
}

export default (charities = { data: [] }, { type, payload }) => {
  switch (type) {
    case 'FETCH_CHARITIES':
      return fetchCharities(charities, payload)
    case 'RECEIVE_CHARITIES_FAILURE':
      return receiveCharitiesFailure(charities, payload)
    case 'RECEIVE_CHARITIES_SUCCESS':
      return receiveCharitiesSuccess(charities, payload)
    case 'FETCH_CHARITY':
      return fetchCharity(charities, payload)
    case 'RECEIVE_CHARITY_FAILURE':
      return receiveCharityFailure(charities, payload)
    case 'RECEIVE_CHARITY_SUCCESS':
      return receiveCharitySuccess(charities, payload)
    default:
      return charities
  }
}
