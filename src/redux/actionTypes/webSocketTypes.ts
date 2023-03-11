export interface IWSOrder {
  ingredients: string[]
  _id: string
  name: string
  number: number
  status: 'pending' | 'created' | 'done'
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

export enum WSActionTypes {
  WS_CONNECTION_START = 'WS_CONNECTION_START',
  WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS',
  WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED',
  WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR',
  WS_GET_ALL_ORDERS = 'WS_GET_ALL_ORDERS',
}
