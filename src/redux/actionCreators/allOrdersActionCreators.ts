import { IAllOrders, allOrdersWSActionTypes } from 'redux/actionTypes'
import {
  startAllOrdersWSConnectionA,
  stopAllOrdersWSConnectionA,
  successAllOrdersWSConnectionA,
  closedAllOrdersWSConnectionA,
  errorAllOrdersWSConnectionA,
  getAllOrdersA,
} from 'redux/actions'

export const startAllOrdersWSConnection = (): startAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.START,
})

export const stopAllOrdersWSConnection = (): stopAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.STOP,
})

export const successAllOrdersWSConnection = (
  event: Event,
): successAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.SUCCESS,
  payload: event,
})

export const closedAllOrdersWSConnection = (
  event: Event,
): closedAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.CLOSED,
  payload: event,
})

export const errorAllOrdersWSConnection = (
  event: Event,
): errorAllOrdersWSConnectionA => ({
  type: allOrdersWSActionTypes.ERROR,
  payload: event,
})

export const getAllOrders = (event: MessageEvent): getAllOrdersA => {
  const data: IAllOrders = JSON.parse(event.data as string) as IAllOrders

  const doneOrders = data.orders
    .filter(el => el.status === 'done')
    .map(el => el.number)

  const onworkOrders = data.orders
    .filter(el => el.status === 'pending')
    .map(el => el.number)

  return {
    type: allOrdersWSActionTypes.GET_ORDERS,
    payload: {
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
      doneOrders,
      onworkOrders,
    },
  }
}
