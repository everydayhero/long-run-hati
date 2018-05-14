import {
  PANEL_MAP,
  PANEL_LEADERBOARD,
  TRACKER_PATH
} from '../../../utils/constants'

export const push = (router) => (existing = {}, updated) => {
  router.push({
    pathname: `${process.env.BASE_PATH || '/'}${TRACKER_PATH}`,
    query: {
      ...existing,
      ...updated
    }
  })
}

export const pushToggle = (router) => ({ panel, ...params }) => {
  router.push({
    pathname: `${process.env.BASE_PATH || '/'}${TRACKER_PATH}`,
    query: {
      ...params,
      panel: panel === PANEL_LEADERBOARD ? PANEL_MAP : PANEL_LEADERBOARD
    }
  })
}
