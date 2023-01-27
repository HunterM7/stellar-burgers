import React from 'react'
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
  isActive: boolean
  onClick: () => void
}

const AppHeaderLink: React.FC<AppHeaderLinkT> = ({
  link,
  title,
  isActive,
  onClick,
}) => {
  // Handle click on link
  const handleClick = () => {
    onClick()
  }

  return (
    <a className={styles.wrapper} href={link} onClick={handleClick}>
      {title === 'Конструктор' && (
        <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
      )}
      {title === 'Лента заказов' && (
        <ListIcon type={isActive ? 'primary' : 'secondary'} />
      )}
      {title === 'Личный кабинет' && (
        <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
      )}

      <span
        className={`
					${styles.text}
					${isActive ? styles.active : ''}
				`}
      >
        {title}
      </span>
    </a>
  )
}

export default AppHeaderLink
