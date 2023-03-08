// Utils
import { saveTokens } from 'utils/auth/saveTokens'
import { IRequestCreator } from 'utils/api/requestCreator'
import { API_AUTH_TOKEN } from 'utils/data/constants'
import { customFetch } from 'utils/api/customFetch'

export interface IRefreshTokensResponse {
  success: boolean
  accessToken: string
  refreshToken: string
}

export const refreshTokens = async () => {
  const refreshToken = localStorage.getItem('refreshToken')

  if (refreshToken) {
    const requestOptions: IRequestCreator = {
      method: 'POST',
      body: { token: refreshToken },
    }

    try {
      const fetchResponse = await customFetch<IRefreshTokensResponse>(
        API_AUTH_TOKEN,
        requestOptions,
      )

      saveTokens(fetchResponse.accessToken, fetchResponse.refreshToken)

      return fetchResponse
    } catch (error) {
      Promise.reject(error)
    }
  }

  Promise.reject('There is no refreshToken in LocalStorage')
}
