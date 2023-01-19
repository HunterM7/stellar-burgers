import { API_URL_ORDER } from '../../utils/constants'
import { OrderFetchStatus } from '../actionTypes/types'
import checkReponse from '../../utils/checkReponse'
import { DispatchType } from '../store'

interface setRequestStatus {
  type: typeof OrderFetchStatus.ORDER_REQUEST
}
interface setErrorStatus {
  type: typeof OrderFetchStatus.ORDER_ERROR
}
interface setSuccessStatus {
  type: typeof OrderFetchStatus.ORDER_SUCCESS
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
      type: OrderFetchStatus.ORDER_REQUEST,
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
          type: OrderFetchStatus.ORDER_SUCCESS,
          name: res.name,
          orderId: res.order.number,
        })
      })
      .catch((err) => {
        dispatch({
          type: OrderFetchStatus.ORDER_ERROR,
        })
      })
  }
}
