// !TODO ДОДЕЛАТЬ Fetch

import { checkResponse } from 'utils/api/checkResponse'
import { IRequestCreator, requestCreator } from 'utils/api/requestCreator'
import { refreshTokens } from 'utils/auth/refreshTokens'

export const fetchWithRefresh = async <T>(
  url: string,
  options: IRequestCreator,
) => {
  try {
    const requestOptions = requestCreator(options)

    const res = await fetch(url, requestOptions)

    return checkResponse<T>(res)
  } catch (error) {
    if (error instanceof Error && error.message === 'jwt expired') {
      const freshData = await refreshTokens()

      if (!freshData) return Promise.reject(error)

      const requestOptions = requestCreator({
        ...options,
        headers: { ...options.headers, Authorization: 'freshData.accessToken' },
      })

      const res = await fetch(url, requestOptions)

      return checkResponse<T>(res)
    } else {
      return Promise.reject(error)
    }
  }
}
