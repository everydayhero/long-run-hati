import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from '../../actions/calculator'

const decrementCounter = (count) => {
  if (count > 1) {
    return {
      count: count - 1
    }
  }
  return count
}

const incrementCounter = (count) => ({
  count: count + 1
})

export default ({
  count
} = { count: 1 },
{
  type
}) => {
  switch (type) {
    case DECREMENT_COUNTER:
      return decrementCounter(count)
    case INCREMENT_COUNTER:
      return incrementCounter(count)
    default:
      return { count }
  }
}
