import React from 'react'

import Section from '../../components/Section'
import StaticTourTracker from '../../components/StaticTourTracker'

export default ({teams, individuals}) => (
  <Section>
    <StaticTourTracker
      teams={teams}
      individuals={individuals}
    />
  </Section>
)
