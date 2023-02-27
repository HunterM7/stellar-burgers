// !TODO ДОДЕЛАТЬ Fetch

import { checkReponse } from 'utils/api/checkReponse'
import { IRequestCreator, requestCreator } from 'utils/api/requestCreator'
import { refreshToken } from 'utils/auth/refreshToken'

export const fetchWithRefresh = async <T>(
  url: string,
  options: IRequestCreator,
) => {
  try {
    const requestOptions = requestCreator(options)

    const res = await fetch(url, requestOptions)

    return checkReponse<T>(res)
  } catch (error) {
    if (error instanceof Error && error.message === 'jwt expired') {
      const freshData = await refreshToken()

      if (!freshData) return Promise.reject(error)

      const requestOptions = requestCreator({
        ...options,
        headers: { ...options.headers, Authorization: 'freshData.accessToken' },
      })

      const res = await fetch(url, requestOptions)

      return checkReponse<T>(res)
    } else {
      return Promise.reject(error)
    }
  }
}
