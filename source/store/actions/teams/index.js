import axios from 'axios'

export const fetchTeams = (dispatch) => (uid, filterTeams) => {
  dispatch({
    type: 'FETCH_TEAMS',
    payload: { uid }
  })

  return Promise.all([
    axios.get(`${process.env.SUPPORTER_URL}/api/v2/search/pages_totals.json`, { params: {
      campaign_id: uid,
      group_by: 'teams',
      limit: false
    }}).then((response) => (response.data.results)),
    axios.get(`${process.env.SUPPORTER_URL}/api/v2/search/fitness_activities_totals.json`, { params: {
      campaign_id: uid,
      group_by: 'teams',
      start_at: '2016-08-22',
      type: ['run', 'walk'],
      include_manual: true,
      limit: false
    }}).then((response) => (response.data.results))
  ]).then((json) => {
    receiveTeamsSuccess(dispatch)(uid, filterTeams, json)
  }).catch((err) => {
    receiveTeamsFailure(dispatch)(uid, err)
    return Promise.reject(err)
  })
}

export const receiveTeamsFailure = (dispatch) => (uid, error) => {
  dispatch({
    type: 'RECEIVE_TEAMS_FAILURE',
    payload: {
      uid,
      error
    }
  })
}

export const receiveTeamsSuccess = (dispatch) => (uid, filterTeams, content) => {
  dispatch({
    type: 'RECEIVE_TEAMS_SUCCESS',
    payload: {
      uid,
      filterTeams,
      leaderboards: content
    }
  })
}
