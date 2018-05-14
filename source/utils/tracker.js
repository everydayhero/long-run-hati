import {
  TYPE_TEAMS,
  TYPE_INDIVIDUALS,
  METRIC_POSITION,
  PANEL_MAP,
  PANEL_LEADERBOARD
} from './constants'

export const getType = ({ type }) => type === TYPE_INDIVIDUALS ? TYPE_INDIVIDUALS : TYPE_TEAMS

export const isExpanded = ({ panel }) => panel === PANEL_LEADERBOARD

export const defaultParams = {
  panel: PANEL_MAP,
  metric: METRIC_POSITION,
  type: TYPE_TEAMS
}
