// Utils
import { saveTokens } from 'utils/auth/saveTokens'
import { checkResponse } from 'utils/api/checkResponse'
import { requestCreator } from 'utils/api/requestCreator'
import { API_AUTH_TOKEN } from 'utils/data/constants'

export interface IRefreshTokensResponse {
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

    try {
      const fetchResponse = await fetch(API_AUTH_TOKEN, requestOptions)
      const checkedResponse = await checkResponse<IRefreshTokensResponse>(
        fetchResponse,
      )

      saveTokens(checkedResponse.accessToken, checkedResponse.refreshToken)

      return checkedResponse
    } catch (error) {
      Promise.reject(error)
    }
  }

  Promise.reject('There is no refreshToken in LocalStorage')
}
