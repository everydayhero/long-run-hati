import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.css'

const scroll = (elem, { id, currentHash = '' }) => {
  if (currentHash.slice(1) === id) {
    elem.scrollIntoView()
  }
}

export default class extends React.Component {
  componentDidMount () {
    scroll(ReactDOM.findDOMNode(this), this.props)
  }

  componentDidUpdate () {
    scroll(ReactDOM.findDOMNode(this), this.props)
  }

  render () {
    const {
      id,
      theme = 'base',
      ...props
    } = this.props

    return (<section {...props} id={id} className={styles[theme]} />)
  }
}
