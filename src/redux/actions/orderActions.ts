// Redux
import { AppDispatch, AppThunk } from 'redux/store'
import { OrderFetchStatus } from 'redux/actionTypes'
import {
  setErrorOrderStatus,
  setRequestOrderStatus,
  setSuccessOrderStatus,
} from 'redux/actionCreators'

// Utils
import { API_URL_ORDERS } from 'utils/data/constants'
import { IRequestCreator } from 'utils/api/requestCreator'
import { customFetch } from 'utils/api/customFetch'
import { getCookie } from 'utils/cookie'

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

    const requestOptions: IRequestCreator = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer '.concat(getCookie('accessToken') || ''),
      },
      body: { ingredients },
    }

    customFetch<TOrderResponse>(API_URL_ORDERS, requestOptions)
      .then(res => dispatch(setSuccessOrderStatus(res)))
      .catch(() => dispatch(setErrorOrderStatus()))
  }
