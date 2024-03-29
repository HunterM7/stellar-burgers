import {
  TOrderResponse,
  setErrorOrderStatusA,
  setRequestOrderStatusA,
  setSuccessOrderStatusA,
} from 'redux/actions'
import { OrderFetchStatus } from 'redux/actionTypes'

export const setRequestOrderStatus = (): setRequestOrderStatusA => ({
  type: OrderFetchStatus.ORDER_REQUEST,
})

export const setErrorOrderStatus = (): setErrorOrderStatusA => ({
  type: OrderFetchStatus.ORDER_ERROR,
})

export const setSuccessOrderStatus = (
  res: TOrderResponse,
): setSuccessOrderStatusA => ({
  type: OrderFetchStatus.ORDER_SUCCESS,
  name: res.name,
  orderId: res.order.number,
})
