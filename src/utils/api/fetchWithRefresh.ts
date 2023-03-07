// Utils
import { IErrorResponse } from 'utils/types'
import { checkResponse } from 'utils/api/checkResponse'
import { IRequestCreator, requestCreator } from 'utils/api/requestCreator'
import { refreshTokens } from 'utils/auth/refreshTokens'

export const fetchWithRefresh = async <T>(
  url: string,
  options: IRequestCreator,
) => {
  const requestOptions = requestCreator(options)

  try {
    const fetchResponse = await fetch(url, requestOptions)

    return await checkResponse<T>(fetchResponse)
  } catch (err) {
    const error = err as IErrorResponse

    if (error.message === 'jwt expired') {
      const freshData = await refreshTokens()

      if (freshData) {
        const freshRequestOptions = {
          ...requestOptions,
          headers: {
            ...requestOptions.headers,
            Authorization: freshData.accessToken,
          },
        }

        const fetchResponse = await fetch(url, freshRequestOptions)

        return await checkResponse<T>(fetchResponse)
      }
    }

    return Promise.reject(error)
  }
}
