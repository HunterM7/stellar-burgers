// Redux
import { AppDispatch, AppThunk } from 'redux/store'
import { OrderFetchStatus } from 'redux/actionTypes'
import {
  setErrorOrderStatus,
  setRequestOrderStatus,
  setSuccessOrderStatus,
} from 'redux/actionCreators'

// Utils
import { API_URL_ORDER } from 'utils/constants'
import { checkReponse } from 'utils/checkReponse'
import { requestCreator } from 'utils/requestCreator'

export interface setRequestOrderStatusA {
  type: typeof OrderFetchStatus.ORDER_REQUEST
}
export interface setErrorOrderStatusA {
  type: typeof OrderFetchStatus.ORDER_ERROR
}
export interface setSuccessOrderStatusA {
  type: typeof OrderFetchStatus.ORDER_SUCCESS
  name: string
  orderId: number
}

export type OrderActions =
  | setRequestOrderStatusA
  | setErrorOrderStatusA
  | setSuccessOrderStatusA

export interface TOrderResponse {
  name: string
  order: { number: number }
}

export const setOrder =
  (ingredients: string[]): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setRequestOrderStatus())

    const requestOptions = requestCreator('POST', {}, { ingredients })

    fetch(API_URL_ORDER, requestOptions)
      .then((res) => checkReponse<TOrderResponse>(res))
      .then((res) => dispatch(setSuccessOrderStatus(res)))
      .catch((err) => {
        dispatch(setErrorOrderStatus())
      })
  }
