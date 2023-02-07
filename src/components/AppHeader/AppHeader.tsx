import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

// Data
import { linksList } from 'utils/linksList'

// Routes
import { HOME_LINK } from 'utils/constants'

// Components
import { AppHeaderLink } from 'components'

// Styles
import styles from './AppHeader.module.scss'

const AppHeader: React.FC = () => {
  // List of header links
  const headerLinks = React.useMemo(
    () =>
      linksList.map((link, i) => (
        <AppHeaderLink key={i} title={link.title} link={link.path} />
      )),
    [],
  )

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

export default React.memo(AppHeader)
