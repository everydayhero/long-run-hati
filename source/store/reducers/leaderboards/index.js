export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_LEADERBOARDS':
      return {
        ...state,
        individualMode: payload.mode === 'individuals',
        tab: 0
      }
    case 'CHANGE_TAB':
      return {
        ...state,
        tab: payload.tab
      }
    default:
      return state
  }
}
