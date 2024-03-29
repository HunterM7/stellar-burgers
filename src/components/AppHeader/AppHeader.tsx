import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

// Utils
import { linksList } from 'utils/data/linksList'
import { HOME_LINK } from 'utils/data/constants'

// Components
import { AppHeaderLink } from 'ui'

// Styles
import styles from './AppHeader.module.scss'

const AppHeader: React.FC = () => {
  // List of header links
  const headerLinks = linksList.map(link => (
    <AppHeaderLink key={link.path} {...link} />
  ))

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>{headerLinks}</nav>

        <Link to={HOME_LINK} className={styles.logo}>
          <Logo />
        </Link>
      </div>
    </header>
  )
}

export default AppHeader
