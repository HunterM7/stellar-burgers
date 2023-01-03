import React from 'react'

// Files & Data
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

import { linksList } from '../../utils/linksList'

import styles from './AppHeader.module.scss'

// Yandex Components

// Components
import AppHeaderLink from './AppHeaderLink/AppHeaderLink'

const AppHeader: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState(linksList[0].title)

  const headerLinks = linksList.map((link, i) => {
    return (
      <AppHeaderLink
        key={i}
        title={link.title}
        link={link.link}
        isActive={activeLink === link.title}
        setActiveLink={setActiveLink}
      />
    )
  })

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
