import sortBy from 'lodash/sortBy'
import find from 'lodash/find'
import createReducer from '../../../utils/createReducer';

const positionTeams = (teams, charities) => sortBy(teams, ['passed_threshold_at']).map((team, i) => ({
  ...team,
  id: team.id.toString(),
  position: ++i,
  distance: team.total_threshold_value,
  charity_name: getCharityName(charities, team.charity_id)
}))

const getCharityName = (charities, id) => {
  const charity = find(charities, o => o.id === id)
  return charity && charity.name;
}

const fetchMetrics = state => ({
  ...state,
  status: 'fetching'
})

const fetchMetricsSuccess = (state, { campaign = {} }) => ({
  ...state,
  status: 'fetched',
  teams: positionTeams(campaign.teams, campaign.charities),
  individuals: campaign.individuals
})

const fetchMetricsError = (state, { error }) => ({
  ...state,
  status: 'failed',
  error
})

export default createReducer({
  'FETCH_METRICS': fetchMetrics,
  'FETCH_METRICS_SUCCESS': fetchMetricsSuccess,
  'FETCH_METRICS_ERROR': fetchMetricsError
});
