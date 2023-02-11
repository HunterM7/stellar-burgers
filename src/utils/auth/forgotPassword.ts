// API Endpoints
import { API_URL_PASSWORD_RESET } from 'utils/constants'

// Functions
import { requestCreator } from 'utils/requestCreator'
import { checkReponse } from 'utils/checkReponse'

// Types
type TForm = { email: string }

type TResetPasswordResponse = {
  success: boolean
  message: string
}

export const forgotPassword = async (form: TForm) => {
  const requestOptions = requestCreator('POST', {}, form)

  await fetch(API_URL_PASSWORD_RESET, requestOptions)
    .then((res) => checkReponse<TResetPasswordResponse>(res))
    .then((res) => res)
}
