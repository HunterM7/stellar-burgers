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

export enum allOrdersWSActionTypes {
  WS_CONNECTION_START = 'WS_ALL_ORDERS_CONNECTION_START',
  WS_CONNECTION_SUCCESS = 'WS_ALL_ORDERS_CONNECTION_SUCCESS',
  WS_CONNECTION_CLOSED = 'WS_ALL_ORDERS_CONNECTION_CLOSED',
  WS_CONNECTION_ERROR = 'WS_ALL_ORDERS_CONNECTION_ERROR',
  WS_GET_ALL_ORDERS = 'WS_ALL_ORDERS_GET_ALL_ORDERS',
}

export enum userOrdersWSActionTypes {
  WS_CONNECTION_START = 'WS_USER_ORDERS_CONNECTION_START',
  WS_CONNECTION_SUCCESS = 'WS_USER_ORDERS_CONNECTION_SUCCESS',
  WS_CONNECTION_CLOSED = 'WS_USER_ORDERS_CONNECTION_CLOSED',
  WS_CONNECTION_ERROR = 'WS_USER_ORDERS_CONNECTION_ERROR',
  WS_GET_ALL_ORDERS = 'WS_USER_ORDERS_GET_ALL_ORDERS',
}
