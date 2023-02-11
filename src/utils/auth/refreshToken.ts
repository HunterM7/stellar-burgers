// Check response function
import { checkReponse } from 'utils/checkReponse'
import { setCookie } from 'utils/cookie'

// Functions
import { requestCreator } from 'utils/requestCreator'
import { saveTokens } from 'utils/auth/saveTokens'

// Redux
import { TErrorResponse } from 'redux/actions/authActions'

// API Routes
import { API_AUTH_TOKEN } from '../constants'

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
      const accessToken = res.accessToken.split('Bearer ')[1]

      if (accessToken) {
        saveTokens(accessToken, res.refreshToken)
      }

      return res
    })
    .catch((err: TErrorResponse) => {
      console.log('refresh token error')
    })
}
