import React from 'react'
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import { useForm } from 'hooks/useForm'

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
  const { form, handleForm } = useForm({
    name: '',
    email: '',
    password: '',
  })

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
          onChange={handleForm}
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
          onChange={handleForm}
        />

        <PasswordInput
          onChange={handleForm}
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
