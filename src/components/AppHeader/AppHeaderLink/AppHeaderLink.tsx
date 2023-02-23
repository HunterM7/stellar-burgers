import React from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import styles from './AppHeaderLink.module.scss'

interface IAppHeaderLink {
  title: string
  path: string
  icon: React.ReactElement
}

const AppHeaderLink: React.FC<IAppHeaderLink> = ({ title, path, icon }) => {
  const className = React.useCallback(
    ({ isActive }: { isActive: boolean }) =>
      `${styles.wrapper} ${isActive ? styles.active : ''}`,
    [],
  )

  return (
    <NavLink to={path} className={className}>
      {icon}
      <span className={styles.text}>{title}</span>
    </NavLink>
  )
}

export default React.memo(AppHeaderLink)
