import React, {Component} from 'react'
import NavLink from '../../components/NavLink'
import styles from './styles.css'
import PageSearchModal from 'edh-widgets/src/components/search/PageSearchModal'
import CharitySearchModal from 'edh-widgets/src/components/search/CharitySearchModal'
import Icon from '../../components/Icon'
import Container from '../../components/Container'

const SearchModal = (props) => {
  const modalTypes = {
    page: PageSearchModal,
    charity: CharitySearchModal
  }
  const SelectedModal = modalTypes[props.search]

  if (props.search === 'charity') {
    return (
      <SelectedModal
        {...props}
        action='fundraise'
        i18n={{
          fundraiseAction: 'Select this Charity'
        }}
        campaignSlug={process.env.CAMPAIGN_SLUG}
      />
    )
  } else {
    return (
      <SelectedModal {...props} />
    )
  }
}

export default class extends Component {
  render () {
    const {
      currentPage = '',
      search = 'page',
      campaignUid = '',
      charityUids = []
    } = this.props

    return (
      <div className={styles.overlay}>
        <div className={styles.content}>
          <Container theme='md'>
            <NavLink to={`${currentPage}/`} className={styles.close}>
              <span className={styles.closeIcon}>
                <Icon icon='close' />
              </span>
              <span className={styles.closeText}>
                Close
              </span>
            </NavLink>
            <SearchModal
              search={search}
              campaignUid={campaignUid}
              promotedCharityUids={charityUids}
              country='au'
            />
          </Container>
        </div>
      </div>
    )
  }
}
