import { API_URL_ORDER } from '../../utils/constants'
import { OrderStatus } from '../actionTypes/types'
import checkReponse from '../../utils/checkReponse'
import { DispatchType } from '../store'

interface setRequestStatus {
  type: typeof OrderStatus._REQUEST
}
interface setErrorStatus {
  type: typeof OrderStatus._ERROR
}
interface setSuccessStatus {
  type: typeof OrderStatus._SUCCESS
  name: string
  orderId: number
}

export type orderActions = setRequestStatus | setErrorStatus | setSuccessStatus

interface OrderResponseType {
  name: string
  order: { number: number }
}

/* eslint-disable */
export function setOrder(ingredients: string[]): any {
  return function (dispatch: DispatchType) {
    dispatch({
      type: OrderStatus._REQUEST,
    })

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    }

    fetch(API_URL_ORDER, requestOptions)
      .then((res) => checkReponse<OrderResponseType>(res))
      .then((res) => {
        dispatch({
          type: OrderStatus._SUCCESS,
          name: res.name,
          orderId: res.order.number,
        })
      })
      .catch((err) => {
        dispatch({
          type: OrderStatus._ERROR,
        })
      })
  }
}
