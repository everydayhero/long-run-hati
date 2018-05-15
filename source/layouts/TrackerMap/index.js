import React from 'react'
import TrackerCard from '../TrackerCard'
import styles from './styles.css'
import { UNSELECTED_TOURER_ICON, SELECTED_TOURER_ICON, START_ICON, FINISH_ICON } from '../../utils/icons'
import { createConnected } from 'tour-tracker'

const mapState = ({ map }) => {
  return map
}

const TourTracker = createConnected({
  mapState
})

const assignIcon = (selected) => (tourer) => {
  if (tourer.id === selected) {
    return ({
      ...tourer,
      icon: SELECTED_TOURER_ICON
    })
  } else {
    return ({
      ...tourer,
      icon: UNSELECTED_TOURER_ICON
    })
  }
}

const Map = ({
  tourers = [],
  selected = ''
}) => {
  const decoratedTourers = tourers.map(assignIcon(selected))
  return (
    <TourTracker
      tourers={decoratedTourers}
      tileUrl='https://api.mapbox.com/styles/v1/edh-profserv/cirx09e3m004gg4npg1039a8a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWRoLXByb2ZzZXJ2IiwiYSI6ImNpb2o4aGNiaDAxeGp0eGttYXR0ZzVoMW8ifQ.Swi4xqTcQluPO0U1rFcJAg'
      startIcon={START_ICON}
      finishIcon={FINISH_ICON}
    />
  )
}

export default (props) => {
  return (
    <div className={styles.course}>
      <a href={`${process.env.BASE_PATH}`} className={styles.exit}><i className='fa fa-chevron-left'></i>Back to challenge.runindia.org</a>
      <div className={styles.map}>
        <Map
          tourers={props.teams}
          selected={props.options.id || ''}
        />
      </div>
      <TrackerCard />
    </div>
  )
}
