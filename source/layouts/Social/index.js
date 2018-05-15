import React from 'react'
import styles from './styles.css'
import createSocialFeed from '../../jquery.socialfeed.js'


export default class extends React.Component {
  componentDidMount () {
    if (typeof $ !== 'undefined') {
      createSocialFeed($, window, document)
      $(document).ready(function () {
        $('.social-slides').socialfeed({
          // FACEBOOK
          facebook: {
            accounts: ['@897774490342799'],
            limit: 20,
            access_token: '1045623655513292|bcbcc1c75a15983555b37e7572e906d3'
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
        <div className={styles.socialHeader}>
          <h2 className={styles.title}>
            <a href='https://www.instagram.com/runindia/' target='_blank'>#RunIndia</a>
          </h2>
        </div>
        <div className={styles.social}>
          <ul className='social-slides' />
        </div>
      </div>
    )
  }
}
