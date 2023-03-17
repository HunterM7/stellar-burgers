import { IAllOrders, userOrdersWSActionTypes } from 'redux/actionTypes'

export interface startUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.START
  payload: string
}
export interface stopUserOrdersWSConnectionA {
  type: userOrdersWSActionTypes.STOP
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
  | stopUserOrdersWSConnectionA
  | successUserOrdersWSConnectionA
  | closedUserOrdersWSConnectionA
  | errorUserOrdersWSConnectionA
  | getUserOrdersA
