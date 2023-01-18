import { API_URL_INGREDIENTS } from '../../utils/constants'
import { Status } from '../actionTypes/types'
import { dataType } from '../../utils/types'
import checkReponse from '../../utils/checkReponse'

interface setRequestStatus {
  type: typeof Status._REQUEST
}
interface setErrorStatus {
  type: typeof Status._ERROR
}
interface setSuccessStatus {
  type: typeof Status._SUCCESS
  data: dataType[]
}

export type dataActions = setRequestStatus | setErrorStatus | setSuccessStatus

/* eslint-disable */

type DispatchType = (action: dataActions) => void

// Наш первый thunk
export function getData(): any {
  return function (dispatch: DispatchType) {
    dispatch({
      type: Status._REQUEST,
    })

    fetch(API_URL_INGREDIENTS)
      .then((res) => checkReponse<{ data: dataType[] }>(res))
      .then((res) => {
        dispatch({
          type: Status._SUCCESS,
          data: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: Status._ERROR,
        })
      })
  }
}
