import React from 'react'
import Header from '../Header'
import Logo from '../../components/Logo'
import Tagline from '../../components/Tagline'
import styles from './styles.css'

export default ({
  tagline = {},
  pageSearchModal = false,
  charitySearchModal = false,
  logo = { file: { url: '' } },
  currentPage = '',
  charityIds = [],
  registerLink
}) => {
  return (
    <header role='banner' className={styles.base}>
      <Header
        registerLink={registerLink}
        currentPage={currentPage}
        pageSearchModal={pageSearchModal}
        charitySearchModal={charitySearchModal}
        charityIds={charityIds}
      />
      <Logo />
      <div className={styles.charityContainer}>
        <Tagline {...tagline} />
        {logo.file.url && <div className={styles.charityLogoContainer}><img src={logo.file.url} alt='' className={styles.charityLogo} /></div>}
      </div>
    </header>
  )
}
