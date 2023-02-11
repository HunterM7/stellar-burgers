import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { handleLogout } from 'redux/actions/authActions'
import { useDispatch } from 'redux/store'

// Routes
import { PROFILE_LINK, PROFILE_ORDERS_LINK } from 'utils/constants'

// Styles
import styles from './AccountPage.module.scss'

const AccountPage = () => {
  const dispatch = useDispatch()

  const className = React.useCallback(
    ({ isActive }: { isActive: boolean }) =>
      `${styles.link} ${isActive ? styles['link--active'] : ''}`,
    [],
  )

  const handleLogoutButton = () => {
    dispatch(handleLogout())
  }

  return (
    <main className={`container ${styles.wrapper}`}>
      <aside className={styles.aside}>
        <div className={styles.aside__buttons}>
          <NavLink className={className} to={PROFILE_LINK} end>
            <h3>Профиль</h3>
          </NavLink>

          <NavLink className={className} to={PROFILE_ORDERS_LINK} end>
            <h3>История заказов</h3>
          </NavLink>

          <button onClick={handleLogoutButton} className={styles.link}>
            <h3>Выход</h3>
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

export default React.memo(AccountPage)
