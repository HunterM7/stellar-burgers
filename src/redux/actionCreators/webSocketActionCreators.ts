import { IAllOrders, WSActionTypes } from 'redux/actionTypes'
import {
  closedWSConnectionA,
  errorWSConnectionA,
  getAllOrdersA,
  startWSConnectionA,
  successWSConnectionA,
} from 'redux/actions'

export const startWSConnection = (): startWSConnectionA => ({
  type: WSActionTypes.WS_CONNECTION_START,
})

export const successWSConnection = (event: Event): successWSConnectionA => ({
  type: WSActionTypes.WS_CONNECTION_SUCCESS,
  payload: event,
})

export const closedWSConnection = (event: Event): closedWSConnectionA => ({
  type: WSActionTypes.WS_CONNECTION_CLOSED,
  payload: event,
})

export const errorWSConnection = (event: Event): errorWSConnectionA => ({
  type: WSActionTypes.WS_CONNECTION_ERROR,
  payload: event,
})

export const getAllOrders = (event: MessageEvent): getAllOrdersA => {
  const data: IAllOrders = JSON.parse(event.data as string) as IAllOrders

  const doneOrders = data.orders
    .filter(el => el.status === 'done')
    .map(el => el.number)

  const onworkOrders = data.orders
    .filter(el => el.status === 'created')
    .map(el => el.number)

  return {
    type: WSActionTypes.WS_GET_ALL_ORDERS,
    payload: {
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
      doneOrders,
      onworkOrders,
    },
  }
}
