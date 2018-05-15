import React from 'react'
import Button from '../Button'
import Progress from '../Progress'
import styles from './styles.css'

export default ({
  className = '',
  team = {}
}) => (
  <section className={`${className} ${styles.card}`}>
    <div className={styles.image}>
      <img src={team.avatar_url} alt={team.name} />
    </div>
    <div className={styles.detail}>
      <h6 className={styles.title}>{team.name}</h6>
      <Progress
        target={Math.round(team.target_in_cents / 100) || 0}
        current={Math.round(team.raised_in_cents / 100) || 0}
      />
      <div className={styles.footer}>
        <div className={styles.kms}>{`${Math.round(team.distance / 1000) || 0} km`}</div>
        <div>
          <Button theme='primaryUpper' href={team.page_url} target='_blank'>Donate</Button>
        </div>
      </div>
    </div>
  </section>
)
