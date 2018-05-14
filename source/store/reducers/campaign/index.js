const fetchCampaign = (campaign) => {
  return {
    ...campaign,
    ...{ status: 'fetching' }
  }
}

const receiveCampaignFailure = (campaign, { uid, error = '' }) => {
  return {
    ...campaign,
    ...{ error, status: 'failed' }
  }
}

const receiveCampaignSuccess = (campaign, { data }) => {
  return {
    ...campaign,
    ...data,
    ...{ status: 'fetched' }
  }
}

export default (campaign = {}, { type, payload }) => {
  switch (type) {
    case 'FETCH_CAMPAIGN':
      return fetchCampaign(campaign, payload)
    case 'RECEIVE_CAMPAIGN_FAILURE':
      return receiveCampaignFailure(campaign, payload)
    case 'RECEIVE_CAMPAIGN_SUCCESS':
      return receiveCampaignSuccess(campaign, payload)
    default:
      return campaign
  }
}
