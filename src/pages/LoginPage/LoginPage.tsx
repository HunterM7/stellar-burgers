import React from 'react'
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import { useForm } from 'hooks/useForm'

// Redux
import { useDispatch } from 'redux/store'
import { handleLogin } from 'redux/actions'

// Routes
import { FORGOT_PASSWORD_LINK, REGISTER_LINK } from 'utils/data/constants'

// Components
import { AuthLink } from 'ui'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  // Form state
  const { form, handleForm } = useForm({ email: '', password: '' })

  // Submit form
  const submitForm = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      dispatch(handleLogin(form))
    },
    [dispatch, form],
  )

  return (
    <main className="container auth">
      <h3 className="auth__title">Вход</h3>

      <form className="auth__form" onSubmit={submitForm}>
        <EmailInput
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleForm}
          autoFocus
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
          disabled={!form.email || !form.password}
        >
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
