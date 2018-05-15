import React from 'react'

import Container from '../../components/Container'
import Button from '../../components/Button'
import PageSearchModal from 'edh-widgets/src/components/search/PageSearchModal'
import styles from './styles.css'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      pageSearchActive: false
    }
  }

  render () {
    const {
      logo = {
        url: '',
        alt: ''
      },
      hero = {
        url: ''
      },
      tagline = '',
      lead = '',
      signUpButton = '',
      donateButton = '',
      loginButton = '',
      findFriendButton = ''
      } = this.props
    return (
      <header className={styles.base} style={{backgroundImage: `url(${hero.url})`}}>
        <Container className={styles.container}>
          <div className={styles.logo}>
            <img src={logo.url} alt={logo.alt} />
          </div>
          <div className={styles.leadin}>
            <div className={styles.tagline}>
              {tagline.substr(0, tagline.length - 7).split(' ').map((word, i) => (
                <div key={i}>{word}</div>
              ))}
              <div>{tagline.substr(tagline.length - 7, tagline.length)}</div>
            </div>
            <div className={styles.lead}>{lead}</div>
            <div className={styles.buttons}>
              <Button theme='primary' href='#sign-up'>{signUpButton}</Button>
              <Button theme='text' href={process.env.DONATE_URL}>{donateButton}</Button>
              <Button theme='text' type='button' onClick={() => { this.setState({ pageSearchActive: true }) }}>{findFriendButton}</Button>
              <Button theme='text' href={process.env.LOGIN_URL}>{loginButton}</Button>
            </div>
          </div>
          {this.state.pageSearchActive
            ? <PageSearchModal
              campaignUid={process.env.CAMPAIGN_UID}
              country='au'
              renderIcon={false}
              onClose={() => { this.setState({ pageSearchActive: false }) }}
              />
            : null
          }
        </Container>
      </header>
    )
  }
}
