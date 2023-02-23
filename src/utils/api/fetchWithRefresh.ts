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

    return await checkReponse<T>(res)
  } catch (error) {
    if (error instanceof Error && error.message === 'jwt expired') {
      const freshData = await refreshToken()
      if (!freshData.success) return Promise.reject(freshData)

      const requestOptions = requestCreator({
        ...options,
        headers: { ...options.headers, Authorization: '' },
      })

      const res = await fetch(url, requestOptions)

      return await checkReponse<T>(res)
    } else {
      return Promise.reject(error)
    }
  }
}
