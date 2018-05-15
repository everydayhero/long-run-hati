import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { dark, primary } from '../traits/variables.json'
import { Pin } from 'tour-tracker/dist/icons'

export const WaypointMarker = ({
  color = '#333333',
  dotColor = 'white',
  shadowColor = 'rgba(0, 0, 0, 0.125)',
  textColor = '#FF6600',
  textShadowColor = 'white',
  hideDot = false,
  text
}) => (
  <div style={{
    width: '100%',
    height: '100%'
  }}>
    {!hideDot && (
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: color,
        position: 'absolute'
      }}>
        <div style={{
          width: '75%',
          height: '75%',
          margin: '12.5%',
          borderRadius: '50%',
          backgroundColor: dotColor
        }} />
      </div>
    )}
    {text && (
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontWeight: 700,
        fontSize: '0.875em',
        color: textColor,
        textShadow: `-1px -1px 0 ${textShadowColor}, 1px -1px 0 ${textShadowColor}, -1px 1px 0 ${textShadowColor}, 1px 1px 0 ${textShadowColor}`,
        letterSpacing: '1px',
        whiteSpace: 'nowrap'
      }}>
        {text}
      </div>
    )}
  </div>
)

export const UNSELECTED_TOURER_ICON = {
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  className: '',
  html: renderToStaticMarkup(<WaypointMarker color={primary} />)
}

export const SELECTED_TOURER_ICON = {
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  className: '',
  html: renderToStaticMarkup(<Pin color={primary} />)
}

export const START_ICON = {
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  className: '',
  html: renderToStaticMarkup(<WaypointMarker color={dark} />)
}

export const FINISH_ICON = {
  iconSize: [10, 10],
  iconAnchor: [5, 5],
  className: '',
  html: renderToStaticMarkup(
    <WaypointMarker />)
}
