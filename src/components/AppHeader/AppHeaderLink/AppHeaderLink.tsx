import React from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'

// Styles
import styles from './AppHeaderLink.module.scss'

type TAppHeaderLink = {
  title: string
  path: string
  icon: React.ReactElement
}

const AppHeaderLink: React.FC<TAppHeaderLink> = ({ title, path, icon }) => {
  // Active Link
  const isActive = useMatch(path)

  return (
    <Link className={styles.wrapper} to={path}>
      {React.cloneElement(icon, { type: isActive ? 'primary' : 'secondary' })}

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

export default React.memo(AppHeaderLink)
