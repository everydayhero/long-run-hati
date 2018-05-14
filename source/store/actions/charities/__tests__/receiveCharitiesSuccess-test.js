import sinon from 'sinon'
import { expect } from 'chai'

import { receiveCharitiesSuccess } from '../'

describe('receiveCharitiesSuccess', () => {
  const mockDispatch = sinon.spy()

  receiveCharitiesSuccess(mockDispatch)(['HORAH'])
  const action = mockDispatch.getCall(0).args[0]

  it('has a type of RECEIVE_CHARITIES_SUCCESS', () => {
    expect(action.type).to.eq('RECEIVE_CHARITIES_SUCCESS')
  })

  it('contains the supplied data', () => {
    expect(action.payload.data).to.eql(['HORAH'])
  })
})
