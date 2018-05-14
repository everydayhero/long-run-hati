export const toggleLeaderboards = (mode) => ({
  type: 'TOGGLE_LEADERBOARDS',
  payload: {
    mode
  }
})

export const changeTabs = (tab) => ({
  type: 'CHANGE_TAB',
  payload: {
    tab
  }
})
