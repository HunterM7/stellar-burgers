import { API_URL_ORDER } from '../../utils/constants'
import { OrderFetchStatus } from '../actionTypes/types'
import checkReponse from '../../utils/checkReponse'
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

export type orderActions =
  | setRequestOrderStatusA
  | setErrorOrderStatusA
  | setSuccessOrderStatusA

export interface OrderResponseType {
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
      .then((res) => checkReponse<OrderResponseType>(res))
      .then((res) => dispatch(setSuccessOrderStatus(res)))
      .catch((err) => {
        dispatch(setErrorOrderStatus())
      })
  }
}
