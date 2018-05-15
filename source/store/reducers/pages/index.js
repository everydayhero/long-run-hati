import { updateOrAddResource } from '../../../utils/collectionHelpers'

const updateOrAddPage = updateOrAddResource('route')

const deserializeResponse = (response = {}) => {
  const linkResolver = (ctx, doc, isBroken) => {
    if (isBroken) return '#broken'
    return `/${doc.slug}`
  }

  return {
    header: {
      logo: response.getImage('home.logo') ? response.getImage('home.logo').main : {},
      hero: response.getImage('home.hero') ? response.getImage('home.hero').main : {},
      tagline: response.getText('home.tagline'),
      lead: response.getText('home.lead'),
      signUpButton: response.getText('home.signUpButton'),
      donateButton: response.getText('home.donateButton'),
      loginButton: response.getText('home.loginButton'),
      findFriendButton: response.getText('home.findFriendButton')
    },
    leaderboard: {
      image: response.getImage('home.leaderboardBackground') ? response.getImage('home.leaderboardBackground').main : {}
    },
    about: {
      headings: response.getGroup('home.headings')
        .toArray()
        .map((headings) => headings.getText('heading')),
      body: response.getStructuredText('home.body').asHtml({linkResolver}) || '',
      featuredImage: response.getImage('home.featuredImage') ? response.getImage('home.featuredImage').main : {}
    },
    joinTheMovement: {
      heading: response.getText('home.jtmHeading'),
      steps: response.getGroup('home.steps')
        .toArray()
        .map((step) => ({
          heading: step.getText('heading'),
          image: step.getImage('image') ? step.getImage('image').main : {},
          body: step.getStructuredText('body').asHtml({linkResolver}) || ''
        }))
    },
    signUpNow: {
      heading: response.getText('home.signupHeading'),
      teamTypes: response.getGroup('home.teamTypes')
        .toArray()
        .map((teamType) => ({
          heading: teamType.getText('heading'),
          image: teamType.getImage('image') ? teamType.getImage('image').main : {},
          body: teamType.getStructuredText('body').asHtml({linkResolver}) || ''
        }))
    },
    locations: {
      heading: response.getText('home.locationsHeading'),
      locations: response.getGroup('home.locations')
        .toArray()
        .map((location) => ({
          location: location.getText('location'),
          distance: location.getText('distance')
        }))
    },
    resources: {
      image: response.getImage('home.resourcesImage') ? response.getImage('home.resourcesImage').main : {},
      resources: response.getGroup('home.resources')
        .toArray()
        .map((resource) => {
          const url = resource.getLink('link')
          return {
            title: resource.getText('title'),
            url: url ? url.url(linkResolver) : null
          }
        })
    },
    footer: {
      logo: response.getImage('home.logo') ? response.getImage('home.logo').main : {},
      links: response.getGroup('home.footerLinks')
        .toArray()
        .map((link) => {
          const url = link.getLink('link')
          return {
            title: link.getText('label'),
            url: url ? url.url(linkResolver) : null
          }
        }),
      socialLinks: response.getGroup('home.socialLinks')
        .toArray()
        .map((link) => {
          const url = link.getLink('link')
          return {
            network: link.getText('network'),
            url: url ? url.url(linkResolver) : null
          }
        })
    }
  }
}

const fetchPage = (pages, { route }) => {
  return {
    ...pages,
    data: updateOrAddPage(pages.data, { route, status: 'fetching' })
  }
}

const receivePageFailure = (pages, { route, error = '' }) => {
  return {
    ...pages,
    data: updateOrAddPage(pages.data, { route, error, status: 'failed' })
  }
}

const receivePageSuccess = (pages, { route, content = {} } = {}) => ({
  ...pages,
  data: updateOrAddPage(pages.data, {
    route,
    content: deserializeResponse(content),
    status: 'fetched'
  })
})

export default (pages = { data: [] }, { type, payload }) => {
  switch (type) {
    case 'FETCH_PAGE':
      return fetchPage(pages, payload)
    case 'RECEIVE_PAGE_FAILURE':
      return receivePageFailure(pages, payload)
    case 'RECEIVE_PAGE_SUCCESS':
      return receivePageSuccess(pages, payload)
    default:
      return pages
  }
}
