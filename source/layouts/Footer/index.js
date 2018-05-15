import React from 'react'

import Container from '../../components/Container'
import styles from './styles.css'

export default ({
  logo = {
    url: '',
    alt: ''
  },
  links = [],
  socialLinks = []
}) => (
  <footer className={styles.base}>
    <Container>
      <div className={styles.footerPanels}>
        <div className={styles.footerPanel}>
          <div className={styles.logo}>
            <img src={logo.url} alt={logo.alt} />
          </div>
        </div>
        <div className={styles.footerPanel}>
          <ul className={styles.links}>
            {links.map((link, i) => (
              <li className={styles.link} key={i}><a className={styles.linkItem} href={link.url}>{link.title}</a></li>
            ))}
          </ul>
        </div>
        <div className={styles.footerPanel}>
          <ul className={styles.socialLinks}>
            {socialLinks.map((link, i) => (
              <li key={i}><a href={link.url} className={styles.socialLink} target='_blank'><i className={`fa fa-${link.network}`}></i></a></li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </footer>
)
