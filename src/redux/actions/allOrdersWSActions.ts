import { IAllOrders, allOrdersWSActionTypes } from 'redux/actionTypes'

export interface startAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.WS_CONNECTION_START
}
export interface successAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.WS_CONNECTION_SUCCESS
  payload: Event
}
export interface closedAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.WS_CONNECTION_CLOSED
  payload: Event
}
export interface errorAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.WS_CONNECTION_ERROR
  payload: Event
}
export interface getAllOrdersA {
  type: allOrdersWSActionTypes.WS_GET_ALL_ORDERS
  payload: IAllOrders
}

export type allOrdersWSActions =
  | startAllOrdersWSConnectionA
  | successAllOrdersWSConnectionA
  | closedAllOrdersWSConnectionA
  | errorAllOrdersWSConnectionA
  | getAllOrdersA
