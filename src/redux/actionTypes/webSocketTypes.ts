export interface IWSOrder {
  ingredients: string[]
  _id: string
  status: 'done'
  number: number
  createdAt: '2021-06-23T14:43:22.587Z'
  updatedAt: '2021-06-23T14:43:22.603Z'
}

export interface IAllOrders {
  success: boolean
  orders: IWSOrder[]
  total: number
  totalToday: number
}

export enum WSActionTypes {
  WS_CONNECTION_START = 'WS_CONNECTION_START',
  WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS',
  WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED',
  WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR',
  WS_GET_ALL_ORDERS = 'WS_GET_ALL_ORDERS',
}
