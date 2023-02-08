import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { authUserSelector } from 'redux/selectors'
import { handleRegister } from 'redux/actions'
import {
  authChangeName,
  authChangePassword,
  authChangeEmail,
} from 'redux/actionCreators'

// Routes
import { LOGIN_LINK } from 'utils/constants'

// Styles
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Form state
  const { name, email, password } = useSelector(authUserSelector)

  // Name input function
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authChangeName(e.target.value))
  }

  // Email input function
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authChangeEmail(e.target.value))
  }

  // Password input function
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authChangePassword(e.target.value))
  }

  // On click main button
  const handleRegisterClick = () => {
    dispatch(
      handleRegister({
        name,
        email,
        password,
      }),
    )
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
          value={name}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
        />

        <EmailInput
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
        />

        <PasswordInput
          onChange={onChangePassword}
          value={password}
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
