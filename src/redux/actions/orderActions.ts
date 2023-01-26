import { API_URL_ORDER } from '../../utils/constants'
import { OrderFetchStatus } from '../actionTypes/types'
import { checkReponse } from '../../utils/checkReponse'
import { AppDispatch, AppThunk } from '../store'
import {
  setErrorOrderStatus,
  setRequestOrderStatus,
  setSuccessOrderStatus,
} from '../actionCreators/orderActionCreators'

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

// Тут выключил ESLint, потому что не знаю как объяснить ему, как работать с каррированными функциями
/* eslint-disable */
export const setOrder =
  (ingredients: string[]): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setRequestOrderStatus())

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ingredients,
      }),
    }

    fetch(API_URL_ORDER, requestOptions)
      .then((res) => checkReponse<TOrderResponse>(res))
      .then((res) => dispatch(setSuccessOrderStatus(res)))
      .catch((err) => {
        dispatch(setErrorOrderStatus())
      })
  }
