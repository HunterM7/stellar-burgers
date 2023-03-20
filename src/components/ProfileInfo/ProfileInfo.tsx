import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'

// Hooks
import { useForm } from 'hooks/useForm'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { authUserSelector } from 'redux/selectors'
import { setUser } from 'redux/actions'

// Styles
import styles from './ProfileInfo.module.scss'

const ProfileInfo = () => {
  const dispatch = useDispatch()
  const { name, email } = useSelector(authUserSelector)

  // Form state
  const initialForm = {
    name,
    email,
    password: '',
  }

  const { form, handleForm, resetForm } = useForm(initialForm)

  // Display buttons
  const isEdit = JSON.stringify(initialForm) !== JSON.stringify(form)

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
        onChange={handleForm}
        value={form.name}
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
      />

      <EmailInput
        name="email"
        value={form.email}
        onChange={handleForm}
        placeholder="E-mail"
        isIcon
      />

      <PasswordInput
        name={'password'}
        value={form.password}
        onChange={handleForm}
        icon="EditIcon"
      />

      {isEdit && (
        <div className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={resetForm}
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
