// 
import { IErrorResponse } from 'redux/actionTypes'
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

    const data = await checkResponse<T>(res)

    return data
  }
  
  catch (err) {
    const error = err as IErrorResponse

    if (error.message === 'jwt expired') {
      const freshData = await refreshTokens()

      if (!freshData) return Promise.reject(error)

      const requestOptions = requestCreator({
        ...options,
        headers: { ...options.headers, Authorization: freshData.accessToken },
      })

      const res = await fetch(url, requestOptions)

      return checkResponse<T>(res)
    } else {
      return Promise.reject(error)
    }
  }
}
