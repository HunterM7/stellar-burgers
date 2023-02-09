import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { authUserSelector } from 'redux/selectors'
import { authChangeEmail, authChangePassword } from 'redux/actionCreators'
import { handleLogin } from 'redux/actions'

// Routes
import { FORGOT_PASSWORD_LINK, HOME_LINK, REGISTER_LINK } from 'utils/constants'

// Styles
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Form state
  const { email, password, isLoggedIn } = useSelector(authUserSelector)

  // Redirect if logged in
  React.useEffect(() => {
    isLoggedIn && navigate(HOME_LINK)
  }, [isLoggedIn, navigate])

  // Email input function
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authChangeEmail(e.target.value))
  }

  // Password input function
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authChangePassword(e.target.value))
  }

  // Handle login button
  const handleLoginButton = () => {
    dispatch(handleLogin({ email, password }))
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
          value={email}
          onChange={onChangeEmail}
        />

        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={'password'}
        />

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleLoginButton}
        >
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
