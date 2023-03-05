// API Endpoints
import { API_URL_PASSWORD_RESET } from 'utils/data/constants'

// Utils
import { requestCreator } from 'utils/api/requestCreator'
import { checkResponse } from 'utils/api/checkResponse'

// Types
type TForm = { email: string }

type TResetPasswordResponse = {
  success: boolean
  message: string
}

export const forgotPassword = async (form: TForm) => {
  const requestOptions = requestCreator({ method: 'POST', body: { ...form } })

  await fetch(API_URL_PASSWORD_RESET, requestOptions)
    .then(res => checkResponse<TResetPasswordResponse>(res))
    .then(res => res)
}
