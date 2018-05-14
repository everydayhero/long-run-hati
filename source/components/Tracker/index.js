import React from 'react'
import { Map } from 'tour-tracker'
import Button from '../../components/Button'
import { assignIcon, START_ICON, FINISH_ICON } from '../../utils/icons'
import styles from './styles.css'

export default ({
  teams = [],
  routes = [],
  interactive,
  charity,
  selected,
  onSelection
}) => {
  const decoratedTourers = teams.map(assignIcon(selected, charity))
  return (
    <Map
      tourers={decoratedTourers}
      interactive={interactive}
      tileUrl='https://api.mapbox.com/styles/v1/edh-profserv/cir5xmapm000abvm4yfcrtxpl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWRoLXByb2ZzZXJ2IiwiYSI6ImNpb2o4aGNiaDAxeGp0eGttYXR0ZzVoMW8ifQ.Swi4xqTcQluPO0U1rFcJAg'
      routes={routes}
      startIcon={START_ICON}
      finishIcon={FINISH_ICON}
      onSelection={onSelection}
    />
  )
}
