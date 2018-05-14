import sinon from 'sinon'
import { expect } from 'chai'

import { receiveCharitiesFailure } from '../'

describe('receiveCharitiesFailure', () => {
  const mockDispatch = sinon.spy()

  receiveCharitiesFailure(mockDispatch)('Example error')
  const action = mockDispatch.getCall(0).args[0]

  it('has a type of RECEIVE_CHARITIES_FAILURE', () => {
    expect(action.type).to.eq('RECEIVE_CHARITIES_FAILURE')
  })

  it('contains the supplied error', () => {
    expect(action.payload.error).to.eq('Example error')
  })
})
