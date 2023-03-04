export interface IOrderState {
  orderInfo: {
    name: string
    order: number
  }
  isLoading: boolean
  hasError: boolean
}

export enum OrderFetchStatus {
  ORDER_REQUEST = 'ORDER_REQUEST',
  ORDER_SUCCESS = 'ORDER_SUCCESS',
  ORDER_ERROR = 'ORDER_ERROR',
}
