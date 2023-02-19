import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Utils
import { TUseLocation } from 'utils/types'
import { resetPassword } from 'utils/auth/resetPassword'

// Routes
import { FORGOT_PASSWORD_LINK, LOGIN_LINK } from 'utils/constants'

// Components
import { AuthLink } from 'components'

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate()
  const location: TUseLocation = useLocation()

  React.useEffect(() => {
    !location?.state?.resetPassword && navigate(FORGOT_PASSWORD_LINK)
  }, [location.state, navigate])

  // Form state
  const [form, setForm] = React.useState({
    password: '',
    token: '',
  })

  // Password input function
  const onChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        password: e.target.value,
      }))
    },
    [setForm],
  )

  // Password input function
  const onChangeCode = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        token: e.target.value,
      }))
    },
    [setForm],
  )

  // Submit form
  const submitForm = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      resetPassword(form)
        .then((res) => navigate(LOGIN_LINK))
        .catch((err) => {
          console.log('error')
        })
    },
    [form, navigate],
  )

  return (
    <main className="container auth">
      <h3 className="auth__title">Восстановление пароля</h3>

      <form className="auth__form" onSubmit={submitForm}>
        <PasswordInput
          onChange={onChangePassword}
          value={form.password}
          name={'password'}
          placeholder="Введите новый пароль"
        />

        <Input
          type="text"
          placeholder="Введите код из письма"
          onChange={onChangeCode}
          value={form.token}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
        />

        <Button htmlType="submit" type="primary" size="large">
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

export default React.memo(ResetPasswordPage)
