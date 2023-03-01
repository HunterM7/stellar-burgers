import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Utils
import { forgotPassword } from 'utils/auth/forgotPassword'

// Routes
import { LOGIN_LINK, RESET_PASSWORD_LINK } from 'utils/data/constants'

// Components
import { AuthLink } from 'components'

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
        .catch(error => {
          throw new Error('Error on submitting ForgotPasswordPage form')
        })
    },
    [form, navigate],
  )

  return (
    <main className="container auth">
      <h3 className="auth__title">Восстановление пароля</h3>

      <form className="auth__form" onSubmit={submitForm}>
        <EmailInput
          name="email"
          placeholder="Укажите e-mail"
          value={form.email}
          onChange={onChangeEmail}
          autoFocus
        />

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          disabled={!form.email}
        >
          Восстановить
        </Button>
      </form>

      <div className="auth__links">
        <AuthLink
          title="Вспомнили пароль?"
          buttonName="Войти"
          path={LOGIN_LINK}
        />
      </div>
    </main>
  )
}

export default React.memo(ForgotPasswordPage)
