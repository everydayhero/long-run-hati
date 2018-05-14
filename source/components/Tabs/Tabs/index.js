import React from 'react'
import { TabHeads, TabHead, Tab } from '..'
import styles from './styles.css'

export default ({
  children,
  expandDesktop,
  selected = 0,
  onChange
}) => {
  let count = children.length
  return (
    <div>
      <TabHeads>
        {children.map((tab, i) => (
          <TabHead
            key={i}
            selected={selected === i}
            onClick={onChange(i)}
            title={tab.props.title}
            expandDesktop={expandDesktop}
            count={count}
          />
        ))}
      </TabHeads>
      <div className={`${styles.tabsContent} ${styles[`tabCount${count}`]} ${expandDesktop ? styles.expand : ''}`}>
        <div className={styles.tabContentInner}>
          {children.map((tab, i) => (
            <Tab
              key={i}
              selected={selected === i}
              expandDesktop={expandDesktop}
              {...tab.props}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
