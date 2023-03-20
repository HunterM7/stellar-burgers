import { IAllOrders, userOrdersWSActionTypes } from 'redux/actionTypes'
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
  const data: IAllOrders = JSON.parse(event.data as string) as IAllOrders

  const doneOrders = data.orders
    .filter(el => el.status === 'done')
    .map(el => el.number)

  const onworkOrders = data.orders
    .filter(el => el.status === 'created')
    .map(el => el.number)

  return {
    type: userOrdersWSActionTypes.GET_ORDERS,
    payload: {
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
      doneOrders,
      onworkOrders,
    },
  }
}
