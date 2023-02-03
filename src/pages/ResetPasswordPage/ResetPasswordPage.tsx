import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Routes
import { LOGIN_LINK } from 'utils/constants'

// Styles
import styles from './ResetPasswordPage.module.scss'

const ResetPasswordPage = () => {
  const navigate = useNavigate()

  // Form state
  const [form, setForm] = React.useState({
    password: '',
    code: '',
  })

  // Password input function
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }))
  }

  // Password input function
  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      code: e.target.value,
    }))
  }

  // On click login button
  const handleLoginButton = () => {
    navigate(LOGIN_LINK)
  }

  return (
    <main className={`container ${styles.wrapper}`}>
      <h3 className={styles.title}>Восстановление пароля</h3>

      <form className={styles.form}>
        <PasswordInput
          onChange={onChangePassword}
          value={form.password}
          name={'password'}
          placeholder="Введите новый пароль"
        />

        <Input
          type="text"
          placeholder="Введите код из письма"
          onChange={onChangeCode}
          value={form.code}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
        />

        <Button htmlType="button" type="primary" size="large">
          Восстановить
        </Button>
      </form>

      <div className={styles.options}>
        <div className={styles.options__container}>
          <p className={styles.options__text}>Вспомнили пароль?</p>
          <Button
            htmlType="button"
            type="secondary"
            size="large"
            extraClass={styles.options__btn}
            onClick={handleLoginButton}
          >
            Войти
          </Button>
        </div>
      </div>
    </main>
  )
}

export default ResetPasswordPage
