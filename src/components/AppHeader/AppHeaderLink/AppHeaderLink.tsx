import React from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import styles from './AppHeaderLink.module.scss'

type TAppHeaderLink = {
  title: string
  path: string
  icon: React.ReactElement
}

const AppHeaderLink: React.FC<TAppHeaderLink> = ({ title, path, icon }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.wrapper} ${isActive ? styles['wrapper--active'] : ''}`
      }
      to={path}
    >
      {icon}

      <span className={styles.text}>{title}</span>
    </NavLink>
  )
}

export default React.memo(AppHeaderLink)
