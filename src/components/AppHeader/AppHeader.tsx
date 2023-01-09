import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

// Data
import { linksList } from '../../utils/linksList'

// Components
import AppHeaderLink from './AppHeaderLink/AppHeaderLink'

// Styles
import styles from './AppHeader.module.scss'

const AppHeader: React.FC = () => {
  const headerLinks = linksList.map((link, i) => (
    <AppHeaderLink
      key={i}
      title={link.title}
      link={link.link}
      isActive={link.title === linksList[0].title}
      onClick={() => alert(`Click on: ${link.title}`)}
    />
  ))

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>{headerLinks}</nav>

        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default AppHeader
