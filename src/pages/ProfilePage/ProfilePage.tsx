import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import classNames from 'classnames'

// Redux
import { useDispatch } from 'redux/store'
import { handleLogout } from 'redux/actions'

// Routes
import { PROFILE_LINK, PROFILE_ORDERS_LINK } from 'utils/data/constants'

// Styles
import styles from './ProfilePage.module.scss'

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch()

  const className = React.useCallback(
    ({ isActive }: { isActive: boolean }) =>
      `${styles.link} ${isActive ? styles.active : ''}`,
    [],
  )

  const handleLogoutButton = React.useCallback(() => {
    dispatch(handleLogout())
  }, [dispatch])

  return (
    <main className={classNames('container', styles.wrapper)}>
      <aside className={styles.aside}>
        <div className={styles.aside__buttons}>
          <NavLink className={className} to={PROFILE_LINK} end>
            Профиль
          </NavLink>

          <NavLink className={className} to={PROFILE_ORDERS_LINK} end>
            История заказов
          </NavLink>

          <button className={styles.link} onClick={handleLogoutButton}>
            Выход
          </button>
        </div>

        <p className={styles.aside__info}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </aside>

      <Outlet />
    </main>
  )
}

export default React.memo(ProfilePage)
