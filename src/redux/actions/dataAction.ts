import { API_URL_INGREDIENTS } from '../../utils/constants'
import { Status } from '../actionTypes/types'
import { DataType } from '../../utils/types'
import checkReponse from '../../utils/checkReponse'
import { DispatchType } from '../store'

interface setRequestStatus {
  type: typeof Status._REQUEST
}
interface setErrorStatus {
  type: typeof Status._ERROR
}
interface setSuccessStatus {
  type: typeof Status._SUCCESS
  data: DataType[]
}

export type dataActions = setRequestStatus | setErrorStatus | setSuccessStatus

/* eslint-disable */
export function getData(): any {
  return function (dispatch: DispatchType) {
    dispatch({
      type: Status._REQUEST,
    })

    fetch(API_URL_INGREDIENTS)
      .then((res) => checkReponse<{ data: DataType[] }>(res))
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
