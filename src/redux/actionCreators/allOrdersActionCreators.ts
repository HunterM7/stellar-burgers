import { IAllOrders, allOrdersWSActionTypes } from 'redux/actionTypes'
import {
  startAllOrdersWSConnectionA,
  successAllOrdersWSConnectionA,
  closedAllOrdersWSConnectionA,
  errorAllOrdersWSConnectionA,
  getAllOrdersA,
} from 'redux/actions'

export const startAllOrdersWSConnection = (): startAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.WS_CONNECTION_START,
})

export const successAllOrdersWSConnection = (
  event: Event,
): successAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.WS_CONNECTION_SUCCESS,
  payload: event,
})

export const closedAllOrdersWSConnection = (
  event: Event,
): closedAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.WS_CONNECTION_CLOSED,
  payload: event,
})

export const errorAllOrdersWSConnection = (
  event: Event,
): errorAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.WS_CONNECTION_ERROR,
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
    type: allOrdersWSActionTypes.WS_GET_ALL_ORDERS,
    payload: {
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
      doneOrders,
      onworkOrders,
    },
  }
}
