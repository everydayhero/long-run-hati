import React from 'react'
import styles from './styles.css'

const handleChange = (onChange, wait) => {
  let timeout
  return (e) => {
    let value = e.target.value
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      onChange(value)
    }, wait)
  }
}

export default ({ onChange, placeholder = 'Filter' }) => (
  <div className={styles.filter}>
    <i className={`fa fa-search ${styles.filterIcon}`}></i>
    <input
      type='text'
      placeholder={placeholder}
      className={styles.filterField}
      onChange={handleChange(onChange, 125)}
    />
  </div>
)
