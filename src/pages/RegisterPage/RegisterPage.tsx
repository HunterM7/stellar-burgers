import React from 'react'
import { useNavigate } from 'react-router-dom'
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
import { HOME_LINK, LOGIN_LINK } from 'utils/constants'

// Styles
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Form state
  const [registerForm, setRegisterForm] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  // Name input function
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prev) => ({ ...prev, name: e.target.value }))
  }

  // Email input function
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prev) => ({ ...prev, email: e.target.value }))
  }

  // Password input function
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prev) => ({ ...prev, password: e.target.value }))
  }

  // On click main button
  const handleRegisterClick = () => {
    dispatch(handleRegister(registerForm))
    navigate(HOME_LINK)
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

        <Button
          onClick={handleRegisterClick}
          htmlType="button"
          type="primary"
          size="large"
        >
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
