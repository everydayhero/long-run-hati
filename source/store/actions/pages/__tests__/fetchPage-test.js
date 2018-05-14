import sinon from 'sinon'
import { expect } from 'chai'
import { fetchPage } from '../'

const initialContentfulSpaceId = process.env.CONTENTFUL_SPACE_ID
const initialFetch = global.fetch
const mockFetch = sinon.spy(() => (
  Promise.resolve({
    json () {
      return Promise.resolve({
        items: [{ fields: 'stuff breaks without me' }]
      })
    }
  })
))

describe('fetchPage', () => {
  before(() => {
    process.env.CONTENTFUL_SPACE_ID = 'expected-id'
    global.fetch = mockFetch
  })

  after(() => {
    process.env.CONTENTFUL_SPACE_ID = initialContentfulSpaceId
    global.fetch = initialFetch
  })

  it('calls fetch with a path to local page content json', () => {
    fetchPage(() => ({}))('example')
    const arg = mockFetch.getCall(0).args[0]
    expect(arg).to.eq('https://cdn.contentful.com/spaces/expected-id/entries?content_type=home&fields.slug=example')
  })

  describe('dispatched action', () => {
    it('has a type of FETCH_PAGE', () => {
      const mockDispatch = sinon.spy()
      fetchPage(mockDispatch)('/example')
      const action = mockDispatch.getCall(0).args[0]
      expect(action.type).to.eq('FETCH_PAGE')
    })

    it('contains the supplied route', () => {
      const mockDispatch = sinon.spy()
      fetchPage(mockDispatch)('/example')
      const action = mockDispatch.getCall(0).args[0]
      expect(action.payload.route).to.eq('/example')
    })
  })
})
