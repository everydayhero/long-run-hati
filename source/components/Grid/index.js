import React from 'react'
import styles from './styles.css'
import { clearfix } from '../../css-helpers.css'

class Grid extends React.Component {
  getChildContext () {
    return {
      spacing: this.props.spacing
    }
  }

  render () {
    const {
      spacing,
      children,
      className
    } = this.props

    return (
      <div className={`${clearfix} ${styles[spacing]} ${className}`}>
        {children}
      </div>
    )
  }
}

Grid.childContextTypes = {
  spacing: React.PropTypes.string
}

Grid.defaultProps = {
  spacing: 'default'
}

export default Grid
