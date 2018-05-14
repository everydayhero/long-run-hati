import find from 'lodash/find'

export const mergeCollections = (
  identifierKey
) => (
  collectionA = [],
  collectionB = []
) => {
  const updateOrAddToCollection = updateOrAddResource(identifierKey)
  return collectionB.reduce((acc, resource) => {
    return updateOrAddToCollection(acc, resource)
  }, collectionA)
}

export const updateOrAddResource = (
  identifierKey
) => (
  collection = [],
  resourceAttributes = {}
) => {
  const existingResource = find(
    collection,
    (r) => r[identifierKey] && (r[identifierKey] === resourceAttributes[identifierKey])
  )

  if (existingResource) {
    const index = collection.indexOf(existingResource)
    return [
      ...collection.slice(0, index),
      {
        ...existingResource,
        ...resourceAttributes
      },
      ...collection.slice(index + 1, collection.length)
    ]
  } else {
    return [
      ...collection,
      resourceAttributes
    ]
  }
}
