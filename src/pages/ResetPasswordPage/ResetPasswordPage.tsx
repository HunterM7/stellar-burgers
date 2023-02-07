import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Functions
import { checkReponse } from 'utils/checkReponse'

// Routes
import { API_URL_PASSWORD_RESET_REQUEST, LOGIN_LINK } from 'utils/constants'

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

  // Main button click
  const handleMainButton = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: form.password,
        token: form.code,
      }),
    }

    type TResetPasswordResponse = {
      success: boolean
      message: string
    }

    fetch(API_URL_PASSWORD_RESET_REQUEST, requestOptions)
      .then((res) => checkReponse<TResetPasswordResponse>(res))
      .then((res) => navigate(LOGIN_LINK))
      .catch((err) => {
        alert('error')
      })
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

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleMainButton}
        >
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
