// Check response function
import { checkReponse } from 'utils/checkReponse'

// Utils
import { requestCreator } from 'utils/requestCreator'
import { saveTokens } from 'utils/auth/saveTokens'

// Redux
import { TErrorResponse } from 'redux/actions/authActions'

// API Routes
import { API_AUTH_TOKEN } from 'utils/constants'

export type TRefreshTokenResponse = {
  success: boolean
  accessToken: string
  refreshToken: string
}

export const refreshToken = async () => {
  const requestOptions = requestCreator(
    'POST',
    {},
    { token: localStorage.getItem('refreshToken') },
  )

  await fetch(API_AUTH_TOKEN, requestOptions)
    .then((res) => checkReponse<TRefreshTokenResponse>(res))
    .then((res) => {
      saveTokens(res.accessToken, res.refreshToken)

      return res
    })
    .catch((err: TErrorResponse) => {
      console.log('refresh token error')
    })
}
