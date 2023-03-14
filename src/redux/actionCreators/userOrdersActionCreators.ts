import { IAllOrders, userOrdersWSActionTypes } from 'redux/actionTypes'
import {
  startUserOrdersWSConnectionA,
  successUserOrdersWSConnectionA,
  closedUserOrdersWSConnectionA,
  errorUserOrdersWSConnectionA,
  getUserOrdersA,
} from 'redux/actions'

export const startUserOrdersWSConnection =
  (): startUserOrdersWSConnectionA => ({
    type: userOrdersWSActionTypes.WS_CONNECTION_START,
  })

export const successUserOrdersWSConnection = (
  event: Event,
): successUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.WS_CONNECTION_SUCCESS,
  payload: event,
})

export const closedUserOrdersWSConnection = (
  event: Event,
): closedUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.WS_CONNECTION_CLOSED,
  payload: event,
})

export const errorUserOrdersWSConnection = (
  event: Event,
): errorUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.WS_CONNECTION_ERROR,
  payload: event,
})

export const getUserOrders = (event: MessageEvent): getUserOrdersA => {
  const data: IAllOrders = JSON.parse(event.data as string) as IAllOrders

  const doneOrders = data.orders
    .filter(el => el.status === 'done')
    .map(el => el.number)

  const onworkOrders = data.orders
    .filter(el => el.status === 'created')
    .map(el => el.number)

  return {
    type: userOrdersWSActionTypes.WS_GET_ALL_ORDERS,
    payload: {
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
      doneOrders,
      onworkOrders,
    },
  }
}