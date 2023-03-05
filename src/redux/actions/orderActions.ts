// Redux
import { AppDispatch, AppThunk } from 'redux/store'
import { OrderFetchStatus } from 'redux/actionTypes'
import {
  setErrorOrderStatus,
  setRequestOrderStatus,
  setSuccessOrderStatus,
} from 'redux/actionCreators'

// Utils
import { API_URL_ORDER } from 'utils/data/constants'
import { checkResponse } from 'utils/api/checkResponse'
import { requestCreator } from 'utils/api/requestCreator'

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

    const requestOptions = requestCreator({
      method: 'POST',
      body: { ingredients },
    })

    fetch(API_URL_ORDER, requestOptions)
      .then(res => checkResponse<TOrderResponse>(res))
      .then(res => dispatch(setSuccessOrderStatus(res)))
      .catch(err => {
        dispatch(setErrorOrderStatus())
      })
  }
