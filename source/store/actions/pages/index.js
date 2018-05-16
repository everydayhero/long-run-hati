import prismic from 'prismic.io'

export const fetchPage = (dispatch) => (route) => {
  dispatch({
    type: 'FETCH_PAGE',
    payload: { route }
  })

  return prismic.api('https://run-india.cdn.prismic.io/api').then((api) => (
    api.query('[[:d = at(document.type, "home")]]')
  )).then((response) => (
    response.results[0]
  )).then((json) => {
    receivePageSuccess(dispatch)(route, json)
  }).catch((err) => {
    receivePageFailure(dispatch)(route, err)
    return Promise.reject(err)
  })
}

export const receivePageFailure = (dispatch) => (route, error) => {
  dispatch({
    type: 'RECEIVE_PAGE_FAILURE',
    payload: {
      route,
      error
    }
  })
}

export const receivePageSuccess = (dispatch) => (route, content) => {
  dispatch({
    type: 'RECEIVE_PAGE_SUCCESS',
    payload: {
      route,
      content
    }
  })
}
