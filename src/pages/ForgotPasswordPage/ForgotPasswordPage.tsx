import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Functions
import { forgotPassword } from 'utils/auth/forgotPassword'

// Routes
import { LOGIN_LINK, RESET_PASSWORD_LINK } from 'utils/constants'

// Styles
import styles from './ForgotPasswordPage.module.scss'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Form state
  const [form, setForm] = React.useState({ email: '' })

  // Email input function
  const onChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ email: e.target.value })
    },
    [],
  )

  // Main button click
  const handleMainButton = React.useCallback(() => {
    forgotPassword(form)
      .then(() =>
        navigate(RESET_PASSWORD_LINK, {
          state: { resetPassword: true },
        }),
      )
      .catch((err) => {
        console.log('error')
      })
  }, [form, navigate])

  // On click login button
  const handleLoginButton = React.useCallback(() => {
    navigate(LOGIN_LINK)
  }, [navigate])

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

export default React.memo(ForgotPasswordPage)
