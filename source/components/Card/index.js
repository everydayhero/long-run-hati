import React from 'react'
import numbro from 'numbro'
import Button from '../Button'
import Progress from '../Progress'
import styles from './styles.css'

export default ({
  className = '',
  team = {},
  tooltip = 'Position is calculated using distance cycled, plus 1km for every $5 raised.'
}) => (
  <section className={`${className} ${styles.card}`}>
    <div className={styles.inner}>
      <div className={styles.detail}>
        <h6 className={styles.title}>{team.name}</h6>
        <Progress
          target={Math.round(team.target_cents / 100) || 0}
          current={Math.round(team.total_amount_cents / 100) || 0}
        />
        <div className={styles.charity}>
          {team.charity_name}
        </div>
        <div className={styles.footer}>
          <div className={styles.distance}>
            <div className={styles.label}>Distance</div>
            <div className={styles.amount}>{`${Math.round(team.total_distance_in_meters / 1000) || 0} km`}</div>
          </div>
          <div className={styles.equation}>+</div>
          <div className={styles.raised} title={tooltip}>
            <div className={styles.label}>{'Raised ($5 = 1km)'}</div>
            <div className={styles.amount}>{`${Math.round(team.total_amount_cents / 500) || 0} km`}</div>
          </div>
          <div className={styles.equation}>=</div>
          <div className={styles.total} title={tooltip}>
            <div className={styles.label}>Total</div>
            <div className={styles.amount}>{`${Math.round(team.total_threshold_value / 1000) || 0} km`}</div>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles.img} style={{backgroundImage: `url(${team.image_url})`}}>
          <span className={styles.position}>{numbro(team.position).format('0o')}</span>
        </div>
        <div>
          <Button theme='primaryUpper' to={team.url} target='_blank'>Donate</Button>
        </div>
      </div>
    </div>
  </section>
)
