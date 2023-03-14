import { IAllOrders, userOrdersWSActionTypes } from 'redux/actionTypes'

export interface startUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.START
}
export interface successUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.SUCCESS
  payload: Event
}
export interface closedUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.CLOSED
  payload: Event
}
export interface errorUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.ERROR
  payload: Event
}
export interface getUserOrdersA {
  type: userOrdersWSActionTypes.GET_ORDERS
  payload: IAllOrders
}

export type userOrdersWSActions =
  | startUserOrdersWSConnectionA
  | successUserOrdersWSConnectionA
  | closedUserOrdersWSConnectionA
  | errorUserOrdersWSConnectionA
  | getUserOrdersA
