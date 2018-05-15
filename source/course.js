import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { WaypointMarker } from './utils/icons'

const ROUTES = [
  {
    waypoints: [
      { id: 1, lat: 26.912383, lng: 70.912325, kms: 0, name: 'Jaisalmer' },
      { id: 2, lat: 25.756833, lng: 71.413052, kms: 154, name: 'Barmer' },
      { id: 3, lat: 26.895717, lng: 75.799916, kms: 756, name: 'Japiur' },
      { id: 4, lat: 28.610940, lng: 77.234482, kms: 1068, name: 'New Dehli' },
      { id: 5, lat: 30.159307, lng: 78.761533, kms: 1411, name: 'Pauri' },
      { id: 6, lat: 26.449923, lng: 80.331874, kms: 1951, name: 'Kanpur' },
      { id: 7, lat: 25.627004, lng: 85.109671, kms: 2581, name: 'Patna' },
      { id: 8, lat: 26.995750, lng: 88.278362, kms: 3167, name: 'Darjeeling' },
      { id: 9, lat: 25.578773, lng: 91.893253, kms: 3781, name: 'Shillong' }
    ],
    style: {
      color: 'black'
    }
  }
]

const getWaypointIcon = (waypoint, hideDot) => {
  return {
    iconSize: [10, 10],
    iconAnchor: [5, 5],
    className: '',
    html: renderToStaticMarkup(
      <WaypointMarker
        text={waypoint.name}
        hideDot={hideDot}
      />)
  }
}

const decorateWithIcon = (waypoint, i, waypoints) => {
  return {
    ...waypoint,
    icon: getWaypointIcon(waypoint, i === 0 || i === waypoints.length - 1)
  }
}

export const getRoutes = () => {
  return ROUTES.map(route => {
    return {
      ...route,
      waypoints: route.waypoints.map(decorateWithIcon)
    }
  })
}
