import {
  OrderResponseType,
  setErrorOrderStatusA,
  setRequestOrderStatusA,
  setSuccessOrderStatusA,
} from '../actions/orderAction'
import { OrderFetchStatus } from '../actionTypes/types'

export const setRequestOrderStatus = (): setRequestOrderStatusA => ({
  type: OrderFetchStatus.ORDER_REQUEST,
})

export const setErrorOrderStatus = (): setErrorOrderStatusA => ({
  type: OrderFetchStatus.ORDER_ERROR,
})

export const setSuccessOrderStatus = (
  res: OrderResponseType,
): setSuccessOrderStatusA => ({
  type: OrderFetchStatus.ORDER_SUCCESS,
  name: res.name,
  orderId: res.order.number,
})
