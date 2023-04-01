import {
  closedAllOrdersWSConnection,
  closedUserOrdersWSConnection,
  errorAllOrdersWSConnection,
  errorUserOrdersWSConnection,
  getAllOrders,
  getUserOrders,
  successAllOrdersWSConnection,
  successUserOrdersWSConnection,
} from 'redux/actionCreators'

export interface IWSOrder {
  ingredients: string[]
  _id: string
  name: string
  number: number
  status: 'created' | 'pending' | 'done'
  createdAt: string
  updatedAt: string
}

export interface IAllOrders {
  orders: IWSOrder[]
  onworkOrders: number[]
  doneOrders: number[]
  total: number
  totalToday: number
}

export interface IUserOrders {
  orders: IWSOrder[]
}

export enum allOrdersWSActionTypes {
  START = 'WS_ALL_ORDERS_CONNECTION_START',
  STOP = 'WS_ALL_ORDERS_CONNECTION_STOP',
  SUCCESS = 'WS_ALL_ORDERS_CONNECTION_SUCCESS',
  CLOSED = 'WS_ALL_ORDERS_CONNECTION_CLOSED',
  ERROR = 'WS_ALL_ORDERS_CONNECTION_ERROR',
  GET_ORDERS = 'WS_ALL_ORDERS_GET_ALL_ORDERS',
}

export enum userOrdersWSActionTypes {
  START = 'WS_USER_ORDERS_CONNECTION_START',
  STOP = 'WS_USER_ORDERS_CONNECTION_STOP',
  SUCCESS = 'WS_USER_ORDERS_CONNECTION_SUCCESS',
  CLOSED = 'WS_USER_ORDERS_CONNECTION_CLOSED',
  ERROR = 'WS_USER_ORDERS_CONNECTION_ERROR',
  GET_ORDERS = 'WS_USER_ORDERS_GET_ALL_ORDERS',
}

export const allOrdersMiddlewareProp = {
  wsStart: allOrdersWSActionTypes.START,
  wsStop: allOrdersWSActionTypes.STOP,
  onOpen: successAllOrdersWSConnection,
  onMessage: getAllOrders,
  onError: errorAllOrdersWSConnection,
  onClose: closedAllOrdersWSConnection,
}

export const userOrdersMiddlewareProp = {
  wsStart: userOrdersWSActionTypes.START,
  wsStop: userOrdersWSActionTypes.STOP,
  onOpen: successUserOrdersWSConnection,
  onMessage: getUserOrders,
  onError: errorUserOrdersWSConnection,
  onClose: closedUserOrdersWSConnection,
}
