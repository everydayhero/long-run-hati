import React from 'react'
import { Link } from 'react-router'
import Button from '../../components/Button'
import Statistics from '../../components/Statistics'
import styles from './styles.css'

import { createConnected } from 'tour-tracker'
import { UNSELECTED_TOURER_ICON, START_ICON, FINISH_ICON } from '../../utils/icons'

const mapState = ({ map }) => {
  return map
}

const TourTracker = createConnected({
  mapState
})

const assignIcon = (selected) => (tourer) => ({
  ...tourer,
  icon: UNSELECTED_TOURER_ICON
})

const Map = ({
  tourers = [],
  individuals = [],
  selected = ''
}) => {
  const decoratedTourers = tourers.map(assignIcon(selected))
  return (
    <div className={styles.base}>
      <div className={styles.mapWrapper}>
        <div className={styles.metrics}>
          <Statistics
            teams={tourers}
            participants={individuals.length}
          />
        </div>
        <Link to='tracker' className={styles.map}>
          <div className={styles.tracker}>
            <TourTracker
              tourers={decoratedTourers}
              tileUrl='https://api.mapbox.com/styles/v1/edh-profserv/cirx09e3m004gg4npg1039a8a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWRoLXByb2ZzZXJ2IiwiYSI6ImNpb2o4aGNiaDAxeGp0eGttYXR0ZzVoMW8ifQ.Swi4xqTcQluPO0U1rFcJAg'
              interactive={false}
              startIcon={START_ICON}
              finishIcon={FINISH_ICON}
            />
          </div>
        </Link>
        <div className={styles.button}>
          <Button to='tracker' theme='primaryMap'>Interactive Map <i className='fa fa-chevron-right' aria-hidden /></Button>
        </div>
      </div>
    </div>
  )
}

export default ({
  teams = [],
  individuals = []
}) => {
  return (
    <Map
      tourers={teams}
      individuals={individuals}
    />
  )
}
