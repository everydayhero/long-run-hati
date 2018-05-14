export default (reducerMap, defaultState = {}) => (state = defaultState, action) => {
  const reducer = reducerMap[action.type]
  return reducer ? reducer(state, action.payload) : state
}
