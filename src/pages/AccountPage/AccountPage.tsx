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
        <div className={styles.aside__buttons}>
          <Link to={PROFILE_LINK}>
            <h3>Профиль</h3>
          </Link>
          <Link to={PROFILE_ORDERS_LINK}>
            <h3>История заказов</h3>
          </Link>
          <button className={styles.logout}>
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

export default AccountPage
