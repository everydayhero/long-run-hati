import React from 'react'
import find from 'lodash/find'
import openPopup from '../../../node_modules/edh-widgets/src/lib/openPopup'
import Icon from '../Icon'
import styles from './styles.css'

const openUrl = (url) => {
  let popupConfig = {
    toolbar: 0,
    status: 0,
    width: 640,
    height: 320
  }

  openPopup(url, popupConfig)
}

const getSelectedTeam = ({ teams = [], selected }) => selected && find(teams, o => o.id === selected)

const getUrl = ({ selected }) => {
  let url = 'http://www.greatsoutherncrossing.com.au/tracker'
  return selected ? `${url}${encodeURIComponent(`?team=${selected}`)}` : url
}

export default (props) => ({
  props,

  facebookClick () {
    let selectedTeam = getSelectedTeam(props)

    let opts = {
      url: getUrl(props),
      appID: '249959688736682',
      name: `${selectedTeam ? `${selectedTeam.name} | ` : ''}Great Southern Crossing`,
      description: 'Check out our progress and support my team today. I am virtually crossing Australia for charity in the Great Southern Crossing'
    }

    let url = `https://www.facebook.com/dialog/feed?link=${opts.url}&app_id=${opts.appID}&name=${opts.name}&description=${opts.description}`
    openUrl(url)
  },

  twitterClick () {
    let selectedTeam = getSelectedTeam(props)

    let opts = {
      url: getUrl(props),
      text: 'Check our progress and support my team. I am virtually crossing Australia for charity in the Great Southern Crossing'
    }

    let url = `http://twitter.com/share?url=${opts.url}&text=${opts.text}`
    openUrl(url)
  },

  render () {
    return (
      <div className={styles.base}>
        <ul className={styles.links}>
          <li className={styles.facebook} onClick={this.facebookClick}>Facebook</li>
          <li className={styles.twitter} onClick={this.twitterClick}>Twitter</li>
        </ul>
        <span className={styles.icon}>
          <Icon icon='share' />
        </span>
      </div>
    )
  }
})
