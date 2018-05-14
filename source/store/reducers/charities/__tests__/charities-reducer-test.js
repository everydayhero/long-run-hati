import { expect } from 'chai'

import charities from '../'

describe('charities reducer: (charities, action)', () => {
  context('provided action.FETCH_CHARITIES', () => {
    it("returns the state with status set to 'fetching'", () => {
      expect(charities({}, { type: 'FETCH_CHARITIES' })).to.eql({ status: 'fetching' })
    })
  })

  context('provided action.RECEIVE_CHARITIES_FAILURE', () => {
    it("returns the state with status set to 'failed'", () => {
      expect(charities({}, { type: 'RECEIVE_CHARITIES_FAILURE', payload: { error: 'BAD' } })).to.eql({ status: 'failed', error: 'BAD' })
    })
  })

  context('provided action.RECEIVE_CHARITIES_SUCCESS', () => {
    it("returns the state with status set to 'fetched'", () => {
      expect(charities({}, {
        type: 'RECEIVE_CHARITIES_SUCCESS',
        payload: {
          data: {
            items: [
              {
                fields: {
                  slug: 'a-charity'
                }
              }
            ]
          }
        }
      })).to.eql({
        status: 'fetched',
        error: null,
        data: [
          {
            slug: 'a-charity',
            cause: '',
            introduction: '',
            logo: undefined,
            causeImage: undefined,
            causeImage2: undefined
          }
        ]
      })
    })
  })
  context('provided action.FETCH_CHARITY', () => {
    it("returns the state with [action.slug] set to { status: 'fetching' }", () => {
      expect(charities({}, { type: 'FETCH_CHARITY', payload: { slug: 'a-charity' } })).to.eql({ data: [{ slug: 'a-charity', status: 'fetching' }] })
    })
  })

  context('provided action.RECEIVE_CHARITY_FAILURE', () => {
    it("returns the state with [action.slug] set to { status: 'failed' }", () => {
      expect(charities({}, { type: 'RECEIVE_CHARITY_FAILURE', payload: { slug: 'a-charity' } })).to.eql({ data: [{ slug: 'a-charity', status: 'failed', error: '' }] })
    })
  })

  context('provided action.RECEIVE_CHARITY_SUCCESS', () => {
    it("returns the state with [action.slug] set to { status: 'fetched' }", () => {
      expect(charities({}, { type: 'RECEIVE_CHARITY_SUCCESS', payload: { slug: 'a-charity' } })).to.eql({ data: [{ slug: 'a-charity', status: 'fetched', content: '', error: null }] })
    })
  })
})
