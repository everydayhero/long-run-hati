import { expect } from 'chai'

import pages from '../'

describe('pages reducer: (pages, action)', () => {
  context('provided action.FETCH_PAGE', () => {
    it("returns the state with [action.route] set to { status: 'fetching' }", () => {
      expect(
        pages(
          { data: [] },
          { type: 'FETCH_PAGE', payload: { route: 'a-charity', items: [{ fields: 'really' }] } }
        )
      ).to.eql({
        data: [
          { route: 'a-charity', status: 'fetching' }
        ]
      })
    })
  })

  context('provided action.RECEIVE_PAGE_FAILURE', () => {
    it("returns the state with [action.route] set to { status: 'failed' }", () => {
      expect(
        pages(
          { data: [] },
          { type: 'RECEIVE_PAGE_FAILURE', payload: { route: 'a-charity', items: [{ fields: 'really' }] } }
        )
      ).to.eql({
        data: [
          { route: 'a-charity', status: 'failed', error: '' }
        ]
      })
    })
  })

  context('provided action.RECEIVE_PAGE_SUCCESS', () => {
    it("returns the state with [action.route] set to { status: 'fetched' }", () => {
      expect(
        pages(
          { data: [] },
          { type: 'RECEIVE_PAGE_SUCCESS', payload: { route: 'a-charity', items: [{ fields: 'really' }] } }
        )
      ).to.eql({
        data: [
          { route: 'a-charity', status: 'fetched', content: {} }
        ]
      })
    })
  })
})
