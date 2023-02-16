import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Utils
import { forgotPassword } from 'utils/auth/forgotPassword'

// Routes
import { LOGIN_LINK, RESET_PASSWORD_LINK } from 'utils/constants'

// Styles
import styles from './ForgotPasswordPage.module.scss'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  // Form state
  const [form, setForm] = React.useState({ email: '' })

  // Email input function
  const onChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ email: e.target.value })
    },
    [],
  )

  // Submit form
  const submitForm = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      forgotPassword(form)
        .then(() =>
          navigate(RESET_PASSWORD_LINK, {
            state: { resetPassword: true },
          }),
        )
        .catch((err) => {
          console.log('error')
        })
    },
    [form, navigate],
  )

  // On click login button
  const handleLoginButton = React.useCallback(() => {
    navigate(LOGIN_LINK)
  }, [navigate])

  return (
    <main className={`container ${styles.wrapper}`}>
      <h3 className={styles.title}>Восстановление пароля</h3>

      <form className={styles.form} onSubmit={submitForm}>
        <EmailInput
          name="email"
          placeholder="Укажите e-mail"
          value={form.email}
          onChange={onChangeEmail}
        />

        <Button htmlType="submit" type="primary" size="large">
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
