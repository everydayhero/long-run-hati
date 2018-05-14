import '../../../polyfills/fetch'

export const fetchCharities = (dispatch) => () => {
  dispatch({
    type: 'FETCH_CHARITIES'
  })

  return global.fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?content_type=charity`, {
    headers: {
      'Authorization': `Bearer ${process.env.CONTENTFUL_API_TOKEN}`
    }
  }).then(
    (response) => response.json()
  ).then((json) => {
    receiveCharitiesSuccess(dispatch)(json)
  }).catch((error) => {
    receiveCharitiesFailure(dispatch)(error)
    return Promise.reject(error)
  })
}

export const receiveCharitiesFailure = (dispatch) => (error) => {
  dispatch({
    type: 'RECEIVE_CHARITIES_FAILURE',
    payload: { error }
  })
}

export const receiveCharitiesSuccess = (dispatch) => (charities) => {
  dispatch({
    type: 'RECEIVE_CHARITIES_SUCCESS',
    payload: { data: charities }
  })
}
