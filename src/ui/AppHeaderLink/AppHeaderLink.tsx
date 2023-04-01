import React from 'react'
import { NavLink } from 'react-router-dom'
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils'

// Styles
import styles from './AppHeaderLink.module.scss'

interface IAppHeaderLink {
  title: string
  path: string
  Icon: React.ElementType<TIconProps>
}

const AppHeaderLink: React.FC<IAppHeaderLink> = ({ title, path, Icon }) => {
  const className = ({ isActive }: { isActive: boolean }) => {
    return `${styles.wrapper} ${isActive ? styles.active : ''}`
  }

  const content = ({ isActive }: { isActive: boolean }) => (
    <>
      <Icon type={`${isActive ? 'primary' : 'secondary'}`} />
      <span className={styles.text}>{title}</span>
    </>
  )

  return (
    <NavLink to={path} className={className}>
      {content}
    </NavLink>
  )
}

export default AppHeaderLink
