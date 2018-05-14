import sinon from 'sinon'
import { expect } from 'chai'

const initialFetch = global.fetch
const initialSpaceId = process.env.CONTENTFUL_SPACE_ID

const setup = (
  fetchImplementaion = () => Promise.resolve({ json () {} }),
  spaceId = 'foobar'
) => {
  global.fetch = fetchImplementaion
  process.env.CONTENTFUL_SPACE_ID = spaceId
  const { fetchCharities } = require('../')

  return {
    fetchCharities,
    dispatchSpy: sinon.spy()
  }
}

const tearDown = () => {
  global.fetch = initialFetch
  process.env.CONTENTFUL_SPACE_ID = initialSpaceId
}

describe('fetchCharities', () => {
  after(() => {
    tearDown()
  })

  it('calls fetch with Contentful space/entries url', () => {
    const fetchSpy = sinon.spy(() => (
      Promise.resolve({ json () {} })
    ))
    const { fetchCharities } = setup(fetchSpy, 'expected-space-id')

    fetchCharities(() => ({}))()
    const arg = fetchSpy.getCall(0).args[0]
    expect(arg).to.eq('https://cdn.contentful.com/spaces/expected-space-id/entries?content_type=charity')
  })

  it('always dispatches an action of type of FETCH_CHARITIES', () => {
    const { fetchCharities } = setup()
    const dispatchSpy = sinon.spy()

    fetchCharities(dispatchSpy)()
    const action = dispatchSpy.getCall(0).args[0]

    expect(action.type).to.eq('FETCH_CHARITIES')
  })

  describe('when the fetch fails', () => {
    it('dispatches an action of type RECEIVE_CHARITIES_FAILURE', (done) => {
      const { fetchCharities, dispatchSpy } = setup(() => Promise.reject())

      fetchCharities(dispatchSpy)().catch(() => {
        expect(dispatchSpy.getCall(1).args[0].type).to.eq('RECEIVE_CHARITIES_FAILURE')
        done()
      }).catch(done)
    })

    it('dispatches an action containing the error', (done) => {
      const { fetchCharities, dispatchSpy } = setup(() => Promise.reject(new Error('WAMP!')))

      fetchCharities(dispatchSpy)().catch(() => {
        expect(dispatchSpy.getCall(1).args[0].payload.error.message).to.eq('WAMP!')
        done()
      }).catch(done)
    })
  })

  describe('when the fetch succeeds', () => {
    it('dispatches an action of type RECEIVE_CHARITIES_SUCCESS', (done) => {
      const { fetchCharities, dispatchSpy } = setup(() => Promise.resolve({ json () { return [] } }))

      fetchCharities(dispatchSpy)().then(() => {
        expect(dispatchSpy.getCall(1).args[0].type).to.eq('RECEIVE_CHARITIES_SUCCESS')
        done()
      }).catch(done)
    })

    it('dispatches an action containing charities', (done) => {
      const expectedResponse = [
        { id: 1, name: 'Felix' },
        { id: 2, name: 'Steve' }
      ]

      const { fetchCharities, dispatchSpy } = setup(() => Promise.resolve({ json () { return expectedResponse } }))

      fetchCharities(dispatchSpy)().then(() => {
        expect(dispatchSpy.getCall(1).args[0].payload.data).to.eql(expectedResponse)
        done()
      }).catch(done)
    })
  })
})
