import React, { Component } from 'react'
import styles from './styles.css'

const tabs = [
  {
    title: 'Position',
    subtitle: 'First Team to Cross the Line',
    prizes: [{
      condition: '1st',
      reward: <span>Euro WAM</span>
    }, {
      condition: '2nd',
      reward: <span>Team K2</span>
    }, {
      condition: '3rd',
      reward: <span>So They Can Team 1</span>
    }]
  },
  {
    title: 'Fundraising',
    subtitle: 'Highest Fundraising Team',
    prizes: [{
      condition: '1st',
      reward: <span>Bike Beats</span>
    }, {
      condition: '2nd',
      reward: <span>Euro WAM</span>
    }, {
      condition: '3rd',
      reward: <span>So They Can Team 1</span>
    }]
  }
]

export default class extends Component {
  constructor () {
    super()
    this.handleTabChange = this.handleTabChange.bind(this)
    this.state = {
      activeTab: 0
    }
  }
  handleTabChange (key) {
    this.setState({
      activeTab: key
    })
  }

  render () {
    const {
      activeTab
    } = this.state

    const tabContent = tabs[activeTab]
    return (
      <div className={styles.container}>
        <ul className={styles.tabs}>
          {tabs.map((tab, key) => (
            <li key={key} >
              <button
                onClick={this.handleTabChange.bind(this, key)}
                className={(activeTab === (key)
                ? styles.activeTab : styles.inactiveTab)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.prizes}>
          <h1 className={styles.subtitle}>{tabContent.subtitle}</h1>
          <ul>
            {tabContent.prizes.map((prize, key) => (
              <li key={key} className={styles.prize}>
                <span className={styles.place}>{prize.condition}</span>
                <span className={styles.reward}>{prize.reward}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
