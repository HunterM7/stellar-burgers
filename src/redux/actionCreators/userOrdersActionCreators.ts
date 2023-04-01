import { IUserOrders, userOrdersWSActionTypes } from 'redux/actionTypes'
import {
  startUserOrdersWSConnectionA,
  stopUserOrdersWSConnectionA,
  successUserOrdersWSConnectionA,
  closedUserOrdersWSConnectionA,
  errorUserOrdersWSConnectionA,
  getUserOrdersA,
} from 'redux/actions'

export const startUserOrdersWSConnection = (
  url: string,
): startUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.START,
  payload: url,
})

export const stopUserOrdersWSConnection = (): stopUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.STOP,
})

export const successUserOrdersWSConnection = (
  event: Event,
): successUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.SUCCESS,
  payload: event,
})

export const closedUserOrdersWSConnection = (
  event: Event,
): closedUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.CLOSED,
  payload: event,
})

export const errorUserOrdersWSConnection = (
  event: Event,
): errorUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.ERROR,
  payload: event,
})

export const getUserOrders = (event: MessageEvent): getUserOrdersA => {
  const { orders }: IUserOrders = JSON.parse(
    event.data as string,
  ) as IUserOrders

  return {
    type: userOrdersWSActionTypes.GET_ORDERS,
    payload: {
      orders,
    },
  }
}
