import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Styles
import styles from './AppHeaderLink.module.scss'

type AppHeaderLinkT = {
  link: string
  title: string
}

const AppHeaderLink: React.FC<AppHeaderLinkT> = ({ title, link }) => {
  // Active Link
  const isActive = useMatch(link)

  // Icon
  const linkIcon =
    (title === 'Конструктор' && (
      <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
    )) ||
    (title === 'Лента заказов' && (
      <ListIcon type={isActive ? 'primary' : 'secondary'} />
    )) ||
    (title === 'Личный кабинет' && (
      <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
    ))

  return (
    <Link className={styles.wrapper} to={link}>
      {linkIcon}

      <span
        className={`
					${styles.text}
					${isActive ? styles.active : ''}
				`}
      >
        {title}
      </span>
    </Link>
  )
}

export default AppHeaderLink
