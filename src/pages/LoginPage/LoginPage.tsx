import React from 'react'
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch } from 'redux/store'
import { handleLogin } from 'redux/actions'

// Routes
import { FORGOT_PASSWORD_LINK, REGISTER_LINK } from 'utils/data/constants'

// Components
import { AuthLink } from 'components'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  // Form state
  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: '',
  })

  // Email input function
  const onChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm(prev => ({ ...prev, email: e.target.value }))
    },
    [setLoginForm],
  )

  // Password input function
  const onChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm(prev => ({ ...prev, password: e.target.value }))
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

  return (
    <main className="container auth">
      <h3 className="auth__title">Вход</h3>

      <form className="auth__form" onSubmit={submitForm}>
        <EmailInput
          name="email"
          placeholder="E-mail"
          value={loginForm.email}
          onChange={onChangeEmail}
          autoFocus
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

      <div className="auth__links">
        <AuthLink
          title="Вы — новый пользователь?"
          buttonName="Зарегистрироваться"
          path={REGISTER_LINK}
        />
        <AuthLink
          title="Забыли пароль?"
          buttonName="Восстановить пароль"
          path={FORGOT_PASSWORD_LINK}
        />
      </div>
    </main>
  )
}

export default React.memo(LoginPage)
