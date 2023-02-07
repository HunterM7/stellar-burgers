import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// Routes
import { PROFILE_LINK, PROFILE_ORDERS_LINK } from 'utils/constants'

// Styles
import styles from './AccountPage.module.scss'

const AccountPage = () => {
  return (
    <main className={`container ${styles.wrapper}`}>
      <aside className={styles.aside}>
        <Link to={PROFILE_LINK}>
          <h3>Профиль</h3>
        </Link>
        <Link to={PROFILE_ORDERS_LINK}>
          <h3>История заказов</h3>
        </Link>
        <Link to={PROFILE_LINK}>
          <h3>Выход</h3>
        </Link>
        <p>В этом разделе вы можете изменить свои персональные данные</p>
      </aside>
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default AccountPage
