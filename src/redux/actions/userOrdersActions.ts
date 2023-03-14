import { IAllOrders, userOrdersWSActionTypes } from 'redux/actionTypes'

export interface startUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.WS_CONNECTION_START
}
export interface successUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.WS_CONNECTION_SUCCESS
  payload: Event
}
export interface closedUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.WS_CONNECTION_CLOSED
  payload: Event
}
export interface errorUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.WS_CONNECTION_ERROR
  payload: Event
}
export interface getUserOrdersA {
  type: userOrdersWSActionTypes.WS_GET_ALL_ORDERS
  payload: IAllOrders
}

export type userOrdersWSActions =
  | startUserOrdersWSConnectionA
  | successUserOrdersWSConnectionA
  | closedUserOrdersWSConnectionA
  | errorUserOrdersWSConnectionA
  | getUserOrdersA
