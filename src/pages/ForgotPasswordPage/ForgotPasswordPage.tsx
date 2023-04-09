import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import { useForm } from 'hooks/useForm'

// Routes
import { LOGIN_LINK, RESET_PASSWORD_LINK } from 'utils/data/constants'

// Utils
import { forgotPassword } from 'utils/auth/forgotPassword'

// Components
import { AuthLink } from 'ui'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  // Form state
  const { form, handleForm } = useForm({ email: '' })

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
        .catch(() => {
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
          onChange={handleForm}
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
