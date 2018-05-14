import sinon from 'sinon'
import { expect } from 'chai'
import { receivePageFailure } from '../'

describe('receivePageFailure', () => {
  const mockDispatch = sinon.spy()
  receivePageFailure(mockDispatch)('/example', 'Example error')
  const action = mockDispatch.getCall(0).args[0]

  it('has a type of RECEIVE_PAGE_FAILURE', () => {
    expect(action.type).to.eq('RECEIVE_PAGE_FAILURE')
  })

  it('contains the supplied route', () => {
    expect(action.payload.route).to.eq('/example')
  })

  it('contains the supplied error', () => {
    expect(action.payload.error).to.eq('Example error')
  })
})
