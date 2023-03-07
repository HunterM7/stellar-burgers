// API Endpoints
import { API_URL_PASSWORD_RESET_REQUEST } from 'utils/data/constants'

// Utils
import { IErrorResponse } from 'utils/types'
import { customFetch } from 'utils/api/customFetch'
import { IRequestCreator } from 'utils/api/requestCreator'

// Types
type TForm = { password: string; token: string }

type TResetPasswordResponse = {
  success: boolean
  message: string
}
export const resetPassword = async (form: TForm) => {
  const requestOptions: IRequestCreator = { method: 'POST', body: { ...form } }

  await customFetch<TResetPasswordResponse>(
    API_URL_PASSWORD_RESET_REQUEST,
    requestOptions,
  )
    .then(res => console.log(res.message))
    .catch((error: IErrorResponse) => console.log(error.message))
}
