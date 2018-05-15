import React from 'react'

import styles from './styles.css'
import Section from '../../components/Section'
import Container from '../../components/Container'
import PageSearchModal from 'edh-widgets/src/components/search/PageSearchModal'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      pageSearchActive: false
    }
  }

  render () {
    const {
      heading = '',
      teamTypes = [],
      id = 'sign-up',
      currentHash = ''
    } = this.props
    return (
      <Section id={id} currentHash={currentHash} >
        <div className={styles.header} id='sign-up'>
          <Container>
            <h2 className={styles.heading}>{heading}</h2>
          </Container>
        </div>
        <Container>
          {teamTypes.length && (
            <div className={styles.actions}>
              <div className={styles.action}>
                <a className={styles.hero} href='https://registration.everydayhero.com/ps/event/RunIndia/EntryForm?id=21620&mode='>
                  <h3 className={styles.actionHeading}>{teamTypes[0].heading}</h3>
                  <img src={teamTypes[0].image.url} />
                </a>
                <a href='https://registration.everydayhero.com/ps/event/RunIndia/EntryForm?id=21620&mode='><div className={styles.body}
                  dangerouslySetInnerHTML={{ __html: teamTypes[0].body }} /></a>
              </div>
              <div className={styles.action}>
                <a className={styles.hero}
                  onClick={() => { this.setState({ pageSearchActive: true }) }}>
                  <h3 className={styles.actionHeading}>{teamTypes[1].heading}</h3>
                  <img src={teamTypes[1].image.url} />
                </a>
                <a onClick={() => { this.setState({ pageSearchActive: true }) }}><div className={styles.body}
                  dangerouslySetInnerHTML={{ __html: teamTypes[1].body }} /></a>
                {this.state.pageSearchActive
                  ? <PageSearchModal
                    i18n={{
                      title: 'Search for a team'
                    }}
                    campaignUid={process.env.CAMPAIGN_UID}
                    country='au'
                    renderIcon={false}
                    pageType='team'
                    action='custom'
                    onClose={() => { this.setState({ pageSearchActive: false }) }}
                    onSelect={(data) => { window.location = `https://runindia.everydayhero.com/au/${data.slug}/join?return_to=https%3A%2F%2Frunindia.everydayhero.com%2Fau%2F${data.slug}` }}
                    />
                  : null
                }
              </div>
              <div className={styles.action}>
                <a className={styles.hero} href='https://runindia.everydayhero.com/au/sam-s-team/join?return_to=https%3A%2F%2Frunindia.everydayhero.com%2Fau%2Fsam-s-team'>
                  <h3 className={styles.actionHeading}>{teamTypes[2].heading}</h3>
                  <img src={teamTypes[2].image.url} />
                </a>
                <a href='https://runindia.everydayhero.com/au/sam-s-team/join?return_to=https%3A%2F%2Frunindia.everydayhero.com%2Fau%2Fsam-s-team'><div className={styles.body}
                  dangerouslySetInnerHTML={{ __html: teamTypes[2].body }} /></a>
              </div>
            </div>
          )}
        </Container>
      </Section>
    )
  }
}
