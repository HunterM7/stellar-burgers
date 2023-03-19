import React from 'react'

export const useForm = <T>(initialForm: T) => {
  const [form, setForm] = React.useState(initialForm)

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm(prevForm => ({ ...prevForm, [name]: value }))
  }

  const resetForm = () => setForm(initialForm)

  return { form, handleForm, setForm, resetForm }
}
