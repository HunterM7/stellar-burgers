import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch } from 'redux/store'
import { handleLogin } from 'redux/actions'

// Routes
import { FORGOT_PASSWORD_LINK, REGISTER_LINK } from 'utils/constants'

// Styles
import styles from './LoginPage.module.scss'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Form state
  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: '',
  })

  // Email input function
  const onChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm((prev) => ({ ...prev, email: e.target.value }))
    },
    [setLoginForm],
  )

  // Password input function
  const onChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm((prev) => ({ ...prev, password: e.target.value }))
    },
    [setLoginForm],
  )

  // Submit form
  const submitForm = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      dispatch(handleLogin(loginForm))
    },
    [dispatch, loginForm],
  )

  // On click register button
  const handleRegisterButton = React.useCallback(() => {
    navigate(REGISTER_LINK)
  }, [navigate])

  // On click reset-password button
  const handleForgotPasswordButton = React.useCallback(() => {
    navigate(FORGOT_PASSWORD_LINK)
  }, [navigate])

  return (
    <main className={`container ${styles.wrapper}`}>
      <h3 className={styles.title}>Вход</h3>

      <form className={styles.form} onSubmit={submitForm}>
        <EmailInput
          name="email"
          placeholder="E-mail"
          value={loginForm.email}
          onChange={onChangeEmail}
        />

        <PasswordInput
          onChange={onChangePassword}
          value={loginForm.password}
          name={'password'}
        />

        <Button htmlType="submit" type="primary" size="large">
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

export default React.memo(LoginPage)
