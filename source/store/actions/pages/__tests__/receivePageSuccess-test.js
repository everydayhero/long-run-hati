import sinon from 'sinon'
import { expect } from 'chai'
import { receivePageSuccess } from '../'

describe('receivePageSuccess', () => {
  const mockDispatch = sinon.spy()

  receivePageSuccess(mockDispatch)('example', 'Example content')
  const action = mockDispatch.getCall(0).args[0]

  it('has a type of RECEIVE_PAGE_SUCCESS', () => {
    expect(action.type).to.eq('RECEIVE_PAGE_SUCCESS')
  })

  it('contains the supplied route', () => {
    expect(action.payload.route).to.eq('example')
  })

  it('contains the supplied content', () => {
    expect(action.payload.content).to.eq('Example content')
  })
})
