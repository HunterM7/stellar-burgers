// Check response function
import { checkReponse } from 'utils/api/checkReponse'

// Utils
import { requestCreator } from 'utils/api/requestCreator'
import { saveTokens } from 'utils/auth/saveTokens'

// Redux
import { TErrorResponse } from 'redux/actions/authActions'

// API Routes
import { API_AUTH_TOKEN } from 'utils/data/constants'

export type TRefreshTokenResponse = {
  success: boolean
  accessToken: string
  refreshToken: string
}

export const refreshToken = async () => {
  const requestOptions = requestCreator({
    method: 'POST',
    body: { token: localStorage.getItem('refreshToken') },
  })

  const result = await fetch(API_AUTH_TOKEN, requestOptions)
    .then(res => checkReponse<TRefreshTokenResponse>(res))
    .then(res => {
      saveTokens(res.accessToken, res.refreshToken)

      return res
    })
    .catch((error: TErrorResponse) => {
      return error
    })

  return result
}
