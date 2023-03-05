// Redux
import { IErrorResponse } from 'redux/actionTypes'

// Utils
import { saveTokens } from 'utils/auth/saveTokens'
import { checkResponse } from 'utils/api/checkResponse'
import { requestCreator } from 'utils/api/requestCreator'
import { API_AUTH_TOKEN } from 'utils/data/constants'

export type TRefreshTokenResponse = {
  success: boolean
  accessToken: string
  refreshToken: string
}

export const refreshTokens = async () => {
  const refreshToken = localStorage.getItem('refreshToken')

  if (refreshToken) {
    const requestOptions = requestCreator({
      method: 'POST',
      body: { token: refreshToken },
    })

    const result = await fetch(API_AUTH_TOKEN, requestOptions)
      .then(res => checkResponse<TRefreshTokenResponse>(res))
      .then(res => {
        saveTokens(res.accessToken, res.refreshToken)

        return res
      })
      .catch((error: IErrorResponse) => {
        return error
      })

    return result
  }
}
