const normalizeResults = (results) => (
  results.map(({page}) => ({
    id: page.id,
    name: page.name,
    avatar_url: page.image.medium_image_url,
    page_url: page.url,
    team_id: page.team_id,
    target_in_cents: page.target_cents,
    raised_in_cents: page.amount.cents
  })
))

const fetchIndividuals = (state, payload) => {
  return {
    ...state,
    ...{ status: 'fetching' }
  }
}

const receiveIndividualsFailure = (state, { error }) => {
  return {
    ...state,
    ...{ error, status: 'failed' }
  }
}

const receiveIndividualsSuccess = (state, { leaderboard }) => {
  const data = normalizeResults(leaderboard)
  return {
    ...state,
    status: 'fetched',
    data
  }
}

export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'FETCH_INDIVIDUALS':
      return fetchIndividuals(state, payload)
    case 'RECEIVE_INDIVIDUALS_FAILURE':
      return receiveIndividualsFailure(state, payload)
    case 'RECEIVE_INDIVIDUALS_SUCCESS':
      return receiveIndividualsSuccess(state, payload)
    default:
      return state
  }
}
