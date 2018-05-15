import axios from 'axios'

export const fetchIndividuals = (dispatch) => (uid) => {
  dispatch({
    type: 'FETCH_INDIVIDUALS',
    payload: { uid }
  })

  return Promise.all([
    axios
      .get(`${process.env.SUPPORTER_URL}/api/v2/search/pages_totals.json`, { params: {
        campaign_id: uid,
        include_pages: true,
        type: 'individual',
        limit: false
      }})
      .then(response => (response.data.results))
      .then(json => receiveIndividualsSuccess(dispatch)(uid, json))
      .catch(err => {
        receiveIndividualsFailure(dispatch)(uid, err)
        return Promise.reject(err)
      })
  ])
}

export const receiveIndividualsFailure = (dispatch) => (uid, error) => {
  dispatch({
    type: 'RECEIVE_INDIVIDUALS_FAILURE',
    payload: {
      uid,
      error
    }
  })
}

export const receiveIndividualsSuccess = (dispatch) => (uid, content) => {
  dispatch({
    type: 'RECEIVE_INDIVIDUALS_SUCCESS',
    payload: {
      uid,
      leaderboard: content
    }
  })
}
