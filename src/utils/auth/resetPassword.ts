// API Endpoints
import { API_URL_PASSWORD_RESET_REQUEST } from 'utils/data/constants'

// Utils
import { checkReponse } from 'utils/api/checkReponse'
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
    .then(res => checkReponse<TResetPasswordResponse>(res))
    .then(res => res)
}
