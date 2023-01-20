import { API_URL_ORDER } from '../../utils/constants'
import { OrderFetchStatus } from '../actionTypes/types'
import { checkReponse } from '../../utils/checkReponse'
import { DispatchType } from '../store'
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

/* eslint-disable */
export function setOrder(ingredients: string[]): any {
  return function (dispatch: DispatchType) {
    dispatch(setRequestOrderStatus())

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    }

    fetch(API_URL_ORDER, requestOptions)
      .then((res) => checkReponse<TOrderResponse>(res))
      .then((res) => {
        console.log(res)

        dispatch(setSuccessOrderStatus(res))
      })
      .catch((err) => {
        dispatch(setErrorOrderStatus())
      })
  }
}
