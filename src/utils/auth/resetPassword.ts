// API Endpoints
import { API_URL_PASSWORD_RESET_REQUEST } from 'utils/data/constants'

// Utils
import { checkResponse } from 'utils/api/checkResponse'
import { requestCreator } from 'utils/api/requestCreator'

// Types
type TForm = { password: string; token: string }

type TResetPasswordResponse = {
  success: boolean
  message: string
}
export const resetPassword = async (form: TForm) => {
  const requestOptions = requestCreator({ method: 'POST', body: { ...form } })

  await fetch(API_URL_PASSWORD_RESET_REQUEST, requestOptions)
    .then(res => checkResponse<TResetPasswordResponse>(res))
    .then(res => res)
}
