import { IAllOrders, WSActionTypes } from 'redux/actionTypes'

export interface startWSConnectionA {
  type: WSActionTypes.WS_CONNECTION_START
}
export interface successWSConnectionA {
  type: WSActionTypes.WS_CONNECTION_SUCCESS
  payload: Event
}
export interface closedWSConnectionA {
  type: WSActionTypes.WS_CONNECTION_CLOSED
  payload: Event
}
export interface errorWSConnectionA {
  type: WSActionTypes.WS_CONNECTION_ERROR
  payload: Event
}
export interface getAllOrdersA {
  type: WSActionTypes.WS_GET_ALL_ORDERS
  payload: IAllOrders
}

export type WSActions =
  | startWSConnectionA
  | successWSConnectionA
  | closedWSConnectionA
  | errorWSConnectionA
  | getAllOrdersA
