import { checkReponse } from 'utils/api/checkReponse'
import { IRequestCreator, requestCreator } from 'utils/api/requestCreator'

export const fetchWithRefresh = async <T>(
  url: string,
  options: IRequestCreator,
) => {
  try {
    const requestOptions = requestCreator(options)

    const res = await fetch(url, requestOptions)

    return await checkReponse<T>(res)
  } catch (error) {
    console.log('error')
  }
}
