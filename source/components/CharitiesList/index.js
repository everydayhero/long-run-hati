import React from 'react'
import CharityCard from './CharityCard'
import YourChoiceCharityCard from './YourChoiceCharityCard'
import styles from './styles.css'

const renderCharities = (charities) => (
  charities.map((charity, i) => (
    <CharityCard key={i} image={charity.logo.file.url} link={`/${charity.slug}`} />
  )).concat(
    <YourChoiceCharityCard key={charities.length} />
  )
)

export default ({ charities }) => (
  <div className={styles.base}>
    {renderCharities(charities)}
  </div>
)
