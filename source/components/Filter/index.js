import React from 'react'
import styles from './styles.css'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: false
    }
  }

  handleFocus = (e) => {
    this.setState({
      focus: true
    })
  }

  handleBlur = (e) => {
    let { field } = this.refs
    this.setState({
      focus: field.value
    })
  }

  handleChange = (onChange, wait = 125) => {
    let timeout
    return (e) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        onChange(this.refs.field.value)
      }, wait)
    }
  }

  componentDidMount () {
    let { value } = this.props
    if (value) {
      this.refs.field.value = value
      this.setState({ focus: true })
    }
  }

  render () {
    let { focus } = this.state
    let { onChange, placeholder } = this.props

    return (
      <div className={`${styles.base} ${focus ? styles.focused : ''}`}>
        <label>
          <i className={`${styles.icon} fa fa-search`} />
          <span className={styles.label}>{placeholder}</span>
          <input
            type='text'
            ref='field'
            className={styles.field}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange(onChange)}
          />
        </label>
      </div>
    )
  }
}
