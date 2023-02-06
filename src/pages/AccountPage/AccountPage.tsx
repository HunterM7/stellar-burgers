import React from 'react'
import {
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Styles
import styles from './AccountPage.module.scss'

const AccountPage = () => {
  return (
    <main className={`container ${styles.wrapper}`}>
      <aside></aside>
      <div>
        {/* <Input />
        <EmailInput />
        <PasswordInput /> */}
      </div>
    </main>
  )
}

export default AccountPage
