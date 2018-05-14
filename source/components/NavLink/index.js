import { Link } from 'react-router'
import React from 'react'

export default ({
  to,
  ...props
}) => {
  const base = (process.env.BASE_PATH || '').replace(/\/$/, '')
  return (/^https?:\/\//.test(to))
    ? <a {...props} href={to} />
    : <Link {...props} to={`${base}${to}`} />
}
