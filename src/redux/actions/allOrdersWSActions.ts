import { IAllOrders, allOrdersWSActionTypes } from 'redux/actionTypes'

export interface startAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.START
}
export interface stopAllOrdersWSConnectionA {
  type: allOrdersWSActionTypes.STOP
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
  | stopAllOrdersWSConnectionA
  | successAllOrdersWSConnectionA
  | closedAllOrdersWSConnectionA
  | errorAllOrdersWSConnectionA
  | getAllOrdersA
