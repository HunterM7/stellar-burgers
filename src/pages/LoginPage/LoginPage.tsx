import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Routes
import { FORGOT_PASSWORD_LINK, REGISTER_LINK } from 'utils/constants'

// Styles
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const navigate = useNavigate()

  // Form state
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  })

  // Email input function
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      email: e.target.value,
    }))
  }

  // Password input function
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }))
  }

  // On click register button
  const handleRegisterButton = () => {
    navigate(REGISTER_LINK)
  }

  // On click reset-password button
  const handleForgotPasswordButton = () => {
    navigate(FORGOT_PASSWORD_LINK)
  }

  return (
    <main className={`container ${styles.wrapper}`}>
      <h3 className={styles.title}>Вход</h3>

      <form className={styles.form}>
        <EmailInput
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={onChangeEmail}
        />

        <PasswordInput
          onChange={onChangePassword}
          value={form.password}
          name={'password'}
        />

        <Button htmlType="button" type="primary" size="large">
          Войти
        </Button>
      </form>

      <div className={styles.options}>
        <div className={styles.options__container}>
          <p className={styles.options__text}>{'Вы — новый пользователь?'}</p>
          <Button
            htmlType="button"
            type="secondary"
            size="large"
            extraClass={styles.options__btn}
            onClick={handleRegisterButton}
          >
            Зарегистрироваться
          </Button>
        </div>

        <div className={styles.options__container}>
          <p className={styles.options__text}>Забыли пароль?</p>
          <Button
            htmlType="button"
            type="secondary"
            size="large"
            extraClass={styles.options__btn}
            onClick={handleForgotPasswordButton}
          >
            Восстановить пароль
          </Button>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
