import React from 'react'
import { Link } from 'react-router'

import styles from './styles.css'

export default ({
  theme = '',
  to = '',
  href = '',
  ...props
}) => {
  if (href) {
    return <a {...{...props, href}} className={`${styles.button} ${styles[theme]}`}>{props.children}</a>
  } else if (to) {
    return <Link {...props} to={to} className={`${styles.button} ${styles[theme]}`}>{props.children}</Link>
  } else {
    return <button {...props} className={`${styles.button} ${styles[theme]}`}>{props.children}</button>
  }
}
