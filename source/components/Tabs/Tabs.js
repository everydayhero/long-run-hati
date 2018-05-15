import React from 'react'
import Tab from './Tab'
import TabHead from './TabHead'
import TabHeads from './TabHeads'
import styles from './styles.css'

export default class extends React.Component {
  constructor (props) {
    super(props)
    let {selected} = props
    this.state = {selected: selected || 0}
  }

  handleClick (id) {
    return e => this.setState({selected: id})
  }

  render () {
    let {children, expandDesktop = false} = this.props
    return (
      <div className={`${expandDesktop ? styles.expandDesktop : ''}`}>
        <TabHeads>
          {children.map((tab, i) => (
            <TabHead
              key={i}
              selected={this.state.selected === i}
              onClick={this.handleClick(i)}
              icon={tab.props.icon}
              title={tab.props.title}
            />
          ))}
        </TabHeads>
        {children.map((tab, i) => <Tab key={i} {...tab.props} selected={this.state.selected === i} />)}
      </div>
    )
  }
}
