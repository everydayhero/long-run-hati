import React from 'react'
import styles from './styles.css'
import createSocialFeed from '../../jquery.socialfeed.js'
import Codebird from 'codebird'


export default class extends React.Component {
  componentDidMount () {
    if (typeof $ !== 'undefined') {
      createSocialFeed($, window, document, Codebird)
      $(document).ready(() => {
        $('.social-slides').socialfeed({
          // INSTAGRAM
          instagram: {
            accounts: ['&2198902972'],
            limit: 20,
            client_id: 'e164c123a5964362a04627fac37e3b0e',
            user_id: '245504264',
            access_token: '2198902972.1677ed0.141966563fab4eb38f82b1dfc1bc5e28'
          },

          // GENERAL SETTINGS
          length: 160,
          show_media: true,
          media_min_width: 100,
          touch: true,
          update_period: 360000,
          template_html: `
            <li class="social-feed-element {{? !it.moderation_passed}}hidden{{?}}" dt-create="{{=it.dt_create}}" social-feed-id="{{=it.id}}">
              <div class="social-image">{{=it.attachment}}</div>
              <p class="social-icon">
                <i class="fa fa-\{{=it.social_network}}"></i>
              </p>
              <div class='content'>
                <div class="media-body">
                  <div class='text-wrapper'>
                    <p class="social-feed-text">{{=it.text}} <a href="{{=it.link}}" target="_blank" class="read-button">read more</a></p>
                  </div>
                  <span class="author-title \{{=it.social_network}}">\{{=it.author_name}}</span><br/>
                  <span class="post-time"> {{=it.time_ago}}</span>
                </div>
              </div>
            </li>
          `
        })
      })
    }
  }

  render () {
    return (
      <div className={styles.base}>
        <div className={styles.social}>
          <ul className='social-slides' />
        </div>
      </div>
    )
  }
}
