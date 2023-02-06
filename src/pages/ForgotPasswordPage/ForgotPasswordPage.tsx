import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Functions
import { checkReponse } from 'utils/checkReponse'

// Routes
import {
  API_URL_PASSWORD_RESET,
  LOGIN_LINK,
  RESET_PASSWORD_LINK,
} from 'utils/constants'

// Styles
import styles from './ForgotPasswordPage.module.scss'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  // Form state
  const [form, setForm] = React.useState({
    email: '',
  })

  // Email input function
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      email: e.target.value,
    }))
  }

  // Main button click
  const handleMainButton = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.email,
      }),
    }

    type TResetPasswordResponse = {
      success: boolean
      message: string
    }

    fetch(API_URL_PASSWORD_RESET, requestOptions)
      .then((res) => checkReponse<TResetPasswordResponse>(res))
      .then((res) => navigate(RESET_PASSWORD_LINK))
      .catch((err) => {
        console.log('error')
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
        <EmailInput
          name="email"
          placeholder="Укажите e-mail"
          value={form.email}
          onChange={onChangeEmail}
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

export default ForgotPasswordPage
