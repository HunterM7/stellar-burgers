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
import { LOGIN_LINK } from 'utils/data/constants'

// Components
import { AuthLink } from 'components'

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch()

  // Form state
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  // Name input function
  const onChangeName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm(prev => ({ ...prev, name: e.target.value }))
    },
    [setForm],
  )

  // Email input function
  const onChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm(prev => ({ ...prev, email: e.target.value }))
    },
    [setForm],
  )

  // Password input function
  const onChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm(prev => ({ ...prev, password: e.target.value }))
    },
    [setForm],
  )

  // Submit form
  const submitForm = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      dispatch(handleRegister(form))
    },
    [dispatch, form],
  )

  return (
    <main className="container auth">
      <h3 className="auth__title">Регистрация</h3>

      <form className="auth__form" onSubmit={submitForm}>
        <Input
          type="text"
          placeholder="Имя"
          onChange={onChangeName}
          value={form.name}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
          autoFocus
        />

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

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          disabled={!form.email || !form.name || !form.password}
        >
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
