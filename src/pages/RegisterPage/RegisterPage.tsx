import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Routes
import { LOGIN_LINK } from 'utils/constants'

// Styles
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
  const navigate = useNavigate()

  // Form state
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  // Name input function
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      email: e.target.value,
    }))
  }

  // Email input function
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      email: e.target.value,
    }))
  }

  // Password input function
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }))
  }

  // On click login button
  const handleLoginButton = () => {
    navigate(LOGIN_LINK)
  }

  return (
    <main className={`container ${styles.wrapper}`}>
      <h3 className={styles.title}>Регистрация</h3>

      <form className={styles.form}>
        <Input
          type="text"
          placeholder="Имя"
          onChange={onChangeName}
          value={form.name}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
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

        <Button htmlType="button" type="primary" size="large">
          Зарегистрироваться
        </Button>
      </form>

      <div className={styles.options}>
        <div className={styles.options__container}>
          <p className={styles.options__text}>Уже зарегистрированы?</p>
          <Button
            htmlType="button"
            type="secondary"
            size="large"
            extraClass={styles.options__btn}
            onClick={handleLoginButton}
          >
            Войти
          </Button>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
