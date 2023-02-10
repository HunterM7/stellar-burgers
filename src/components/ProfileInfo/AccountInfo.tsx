import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'

// Redux
import { useSelector } from 'redux/store'
import { authUserSelector } from 'redux/selectors'

// Styles
import styles from './AccountInfo.module.scss'

const ProfileInfo = () => {
  const { name, email, password } = useSelector(authUserSelector)

  // Form state
  const [form, setForm] = React.useState({
    name,
    email,
    password,
  })

  // Name input function
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
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

  return (
    <div className={styles.wrapper}>
      <Input
        type="text"
        placeholder="Имя"
        onChange={onChangeName}
        value={form.name}
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
      />

      <EmailInput
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={onChangeEmail}
        isIcon
      />

      <PasswordInput
        onChange={onChangePassword}
        value={form.password}
        name={'password'}
        icon="EditIcon"
      />
    </div>
  )
}

export default React.memo(ProfileInfo)
