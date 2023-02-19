import React from 'react'
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch } from 'redux/store'
import { handleRegister } from 'redux/actions'

// Routes
import { LOGIN_LINK } from 'utils/constants'

// Components
import { AuthLink } from 'components'

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch()

  // Form state
  const [registerForm, setRegisterForm] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  // Name input function
  const onChangeName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm((prev) => ({ ...prev, name: e.target.value }))
    },
    [setRegisterForm],
  )

  // Email input function
  const onChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm((prev) => ({ ...prev, email: e.target.value }))
    },
    [setRegisterForm],
  )

  // Password input function
  const onChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm((prev) => ({ ...prev, password: e.target.value }))
    },
    [setRegisterForm],
  )

  // Submit form
  const submitForm = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      dispatch(handleRegister(registerForm))
    },
    [dispatch, registerForm],
  )

  return (
    <main className="container auth">
      <h3 className="auth__title">Регистрация</h3>

      <form className="auth__form" onSubmit={submitForm}>
        <Input
          type="text"
          placeholder="Имя"
          onChange={onChangeName}
          value={registerForm.name}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
        />

        <EmailInput
          name="email"
          placeholder="E-mail"
          value={registerForm.email}
          onChange={onChangeEmail}
        />

        <PasswordInput
          onChange={onChangePassword}
          value={registerForm.password}
          name={'password'}
        />

        <Button htmlType="submit" type="primary" size="large">
          Зарегистрироваться
        </Button>
      </form>

      <div className="auth__links">
        <AuthLink
          title="Уже зарегистрированы?"
          buttonName="Войти"
          path={LOGIN_LINK}
        />
      </div>
    </main>
  )
}

export default React.memo(RegisterPage)
