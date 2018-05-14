import axios from 'axios'

export const fetchMetrics = (dispatch) => (campaignId = '', start = '', end = '') => {
  dispatch({
    type: 'FETCH_METRICS'
  })

  return axios.get(`${process.env.SUPPORTER_URL}/api/v3/prerelease/metrics/campaigns/${campaignId}`, {
    params: {
      'threshold_metric': 'distance_in_meters_plus_multiplied_amount_cents',
      'threshold_value': 5200000,
      'sort[teams]': '-total_threshold_value',
      'sort[individuals]': '-total_amount_cents',
      'filter[fitness_activities]type': 'bike',
      'filter[fitness_activities]manual': false,
      'filter[fitness_activities]start_at': start,
      'filter[fitness_activities]end_at': end
    }
  }).then(response => response.data.campaign)
    .then(campaign => receiveMetricsSuccess(dispatch)(campaign))
    .catch(error => receiveMetricsError(dispatch)(error))
}

const receiveMetricsSuccess = dispatch => campaign => dispatch({
  type: 'FETCH_METRICS_SUCCESS',
  payload: { campaign }
})

const receiveMetricsError = dispatch => error => dispatch({
  type: 'FETCH_METRICS',
  payload: { error }
})
