import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { dark, light, primary, gold, silver, bronze } from '../traits/variables.json'

export const DotMarker = ({
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

export const Pin = ({
  color = '#00a044',
  shadowColor = 'rgba(0, 0, 0, 0.125)',
  dotColor = '#fff',
  image
}) => (
  <div style={{
    transform: 'translate(0, -20%)',
    width: '100%',
    height: '100%'
  }}>
    <div style={{
      background: shadowColor,
      borderRadius: '50%',
      height: '60%',
      width: '60%',
      position: 'absolute',
      left: '50%',
      bottom: '-50%',
      transformOrigin: '50% 50%',
      transform: 'rotateX(55deg) translate(-50%, 0)'
    }} />
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50% 50% 50% 0',
      backgroundColor: color,
      position: 'absolute',
      transform: 'rotate(-45deg)',
      transformOrigin: '50% 50%'
    }}>
      {image ? (
        <img src={image} style={{
          width: '75%',
          height: '75%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          borderRadius: '50%',
          border: `2px solid ${dotColor}`
        }} />
      ) : (
        <div style={{
          width: '50%',
          height: '50%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          borderRadius: '50%',
          backgroundColor: dotColor
        }} />
      )}
    </div>
  </div>
)

const getIconColor = (position) => {
  switch (position) {
    case 1:
      return gold
    case 2:
      return silver
    case 3:
      return bronze
    default:
      return primary
  }
}

export const assignIcon = (selected, charity) => (tourer) => ({
  ...tourer,
  icon: tourer.id === selected ? getSelectedTourerIcon(tourer) : (
    charity && tourer.charity_name === charity ? getSelectedCharityTourerIcon(tourer) : getUnselectedTourerIcon(tourer)
  )
})

const getUnselectedTourerIcon = ({ position }) => ({
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  className: '',
  html: renderToStaticMarkup(<DotMarker color={getIconColor(position)} />)
})

const getSelectedCharityTourerIcon = ({ position }) => ({
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  className: '',
  html: renderToStaticMarkup(<Pin color={getIconColor(position)} dotColor={light} />)
})

const getSelectedTourerIcon = ({ image_url, position }) => ({
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  className: '',
  html: renderToStaticMarkup(<Pin color={getIconColor(position)} image={image_url} />)
})

export const START_ICON = {
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  className: '',
  html: renderToStaticMarkup(<DotMarker color={dark} />)
}

export const FINISH_ICON = {
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  className: '',
  html: renderToStaticMarkup(<DotMarker color={dark} />)
}
