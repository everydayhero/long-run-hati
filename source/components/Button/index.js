import React from 'react'
import styles from './styles.css'
import NavLink from '../NavLink'

export default ({
  children,
  to,
  size,
  theme = 'default',
  ...props
}) => {
  const sharedProps = {
    ...props,
    to,
    className: size ? [styles[theme], styles[size]].join(' ') : styles[theme]
  }
  const child = <span>{children}</span>
  return to
    ? <NavLink {...sharedProps}>{child}</NavLink>
    : <button {...sharedProps}>{child}</button>
}
