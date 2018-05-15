import { LOCATION_CHANGE } from 'react-router-redux'
import { find } from 'lodash'
import { mergeCollections } from '../../../utils/collectionHelpers'

const normalizeResults = (results) => (
  results.map((result) => {
    const { team = {} } = result

    return {
      id: team.id.toString() || undefined,
      name: team.name,
      avatar_url: team.image.medium_image_url,
      page_url: team.url,
      target_in_cents: team.target_cents,
      raised_in_cents: team.amount.cents,
      distance: result.distance_in_meters || 0
    }
  })
)

const filterCollection = (results, filterTeams = []) => (
  results.filter(result => filterTeams.indexOf(result.id) === -1)
)

const fetchTeams = (teams) => {
  return {
    ...teams,
    ...{ status: 'fetching' }
  }
}

const receiveTeamsFailure = (teams, { uid, error = '' }) => {
  return {
    ...teams,
    ...{ error, status: 'failed' }
  }
}

const receiveTeamsSuccess = (teams, { leaderboards, filterTeams }) => {
  const [financialLeaderboard, fitnessLeaderboard] = leaderboards.map(
    (r) => normalizeResults(r)
  )

  const merged = mergeCollections('id')(financialLeaderboard, fitnessLeaderboard)

  const data = filterCollection(merged, filterTeams)

  return {
    ...teams,
    status: 'fetched',
    selected: getSelectedTeam(teams.selectedId, null, data),
    data
  }
}

const checkQueryParams = (teams, { query }) => {
  let isTeam = query.metric !== 'individuals'
  return {
    ...teams,
    selectedId: isTeam && query.id,
    selected: isTeam && getSelectedTeam(query.id, teams.selected, teams.data)
  }
}

const getSelectedTeam = (id, current, teams) => {
  if (!id) {
    return null
  } else if (current && current.id && id === current.id.toString()) {
    return current
  } else {
    return find(teams, (o) => o.id && id === o.id.toString())
  }
}

export default (teams = {}, { type, payload }) => {
  switch (type) {
    case 'FETCH_TEAMS':
      return fetchTeams(teams, payload)
    case 'RECEIVE_TEAMS_FAILURE':
      return receiveTeamsFailure(teams, payload)
    case 'RECEIVE_TEAMS_SUCCESS':
      return receiveTeamsSuccess(teams, payload)
    case LOCATION_CHANGE:
      return checkQueryParams(teams, payload)
    default:
      return teams
  }
}
