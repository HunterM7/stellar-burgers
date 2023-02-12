import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { authUserSelector } from 'redux/selectors'
import { setUser } from 'redux/actions/authActions'

// Styles
import styles from './AccountInfo.module.scss'

const ProfileInfo = () => {
  const dispatch = useDispatch()
  const { name, email, password } = useSelector(authUserSelector)

  // Form state
  const [form, setForm] = React.useState({
    name,
    email,
    password,
  })

  // Display buttons
  const isEdit = React.useMemo(
    () =>
      name !== form.name || email !== form.email || password !== form.password,
    [name, email, password, form],
  )

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

  // Cancel function
  const handleCancelButton = () => {
    setForm({ name, email, password })
  }

  // Submit function
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(setUser(form))
  }

  return (
    <form className={styles.wrapper} onSubmit={submitForm}>
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

      {isEdit && (
        <div className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={handleCancelButton}
          >
            Отмена
          </Button>

          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  )
}

export default React.memo(ProfileInfo)
