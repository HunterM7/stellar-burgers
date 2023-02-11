// API Endpoints
import { API_URL_PASSWORD_RESET_REQUEST } from 'utils/constants'

// Functions
import { checkReponse } from 'utils/checkReponse'
import { requestCreator } from 'utils/requestCreator'

// Types
type TForm = { password: string; token: string }

type TResetPasswordResponse = {
  success: boolean
  message: string
}
export const resetPassword = async (form: TForm) => {
  const requestOptions = requestCreator('POST', {}, form)

  await fetch(API_URL_PASSWORD_RESET_REQUEST, requestOptions)
    .then((res) => checkReponse<TResetPasswordResponse>(res))
    .then((res) => res)
}
