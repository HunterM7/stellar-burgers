import { IAllOrders, allOrdersWSActionTypes } from 'redux/actionTypes'

export interface startAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.START
}
export interface successAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.SUCCESS
  payload: Event
}
export interface closedAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.CLOSED
  payload: Event
}
export interface errorAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.ERROR
  payload: Event
}
export interface getAllOrdersA {
  type: allOrdersWSActionTypes.GET_ORDERS
  payload: IAllOrders
}

export type allOrdersWSActions =
  | startAllOrdersWSConnectionA
  | successAllOrdersWSConnectionA
  | closedAllOrdersWSConnectionA
  | errorAllOrdersWSConnectionA
  | getAllOrdersA
