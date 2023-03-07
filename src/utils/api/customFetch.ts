// Utils
import { checkResponse } from 'utils/api/checkResponse'
import { IRequestCreator, requestCreator } from 'utils/api/requestCreator'

export const customFetch = <T>(url: string, options?: IRequestCreator) => {
  const requestOptions = requestCreator(options || {})

  return fetch(url, requestOptions)
    .then(res => checkResponse<T>(res))
    .catch(error => Promise.reject(error))
}
