import React from 'react'
import Button from '../../components/Button'
import SearchModal from '../SearchModal'

import styles from './styles.css'

export default ({
  pageSearchModal = false,
  charitySearchModal = false,
  currentPage = '',
  registerLink = false,
  charityIds = []
}) => (
  <header className={styles.base}>
    <div className={styles.cta}>
      <Button theme='primaryOutline' to='https://supporter.help-au.everydayhero.com/hc/en-us/sections/200835326-Great-Southern-Crossing-Charity-Challenge?_ga=1.141032498.1436759241.1466554068'>
        Help
      </Button>
      <Button theme='primary' to={`${currentPage}/?pageSearchModal`}>
        Support a Rider
      </Button>
    </div>
    {pageSearchModal && <SearchModal search='page' currentPage={currentPage} campaignUid={process.env.CAMPAIGN_ID} />}
    {charitySearchModal && <SearchModal search='charity' currentPage={currentPage} campaignUid={process.env.CAMPAIGN_ID} charityUids={charityIds} />}
  </header>
)
