// API Endpoints
import { API_URL_PASSWORD_RESET } from 'utils/data/constants'

// Utils
import { customFetch } from 'utils/api/customFetch'
import { IRequestCreator } from 'utils/api/requestCreator'

// Types
type TForm = { email: string }

type TResetPasswordResponse = {
  success: boolean
  message: string
}

export const forgotPassword = (form: TForm) => {
  const requestOptions: IRequestCreator = { method: 'POST', body: { ...form } }

  return customFetch<TResetPasswordResponse>(
    API_URL_PASSWORD_RESET,
    requestOptions,
  )
}
