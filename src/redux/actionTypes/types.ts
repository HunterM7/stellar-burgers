export interface DataType {
  _id: string
  name: string
  type: string
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
  __v: number
}

export enum Status {
  _REQUEST = '_REQUEST',
  _SUCCESS = '_SUCCESS',
  _ERROR = '_ERROR',
}

export enum OrderStatus {
  _REQUEST = 'ORDER_REQUEST',
  _SUCCESS = 'ORDER_SUCCESS',
  _ERROR = 'ORDER_ERROR',
}

export interface dataStateType {
  data: DataType[]
  isLoading: boolean
  hasError: boolean
}

export interface CartStateType {
  bun: DataType
  ingredients: DataType[]
  totalPrice: number
}

export interface OrderStateType {
  orderInfo: {
    name: string
    order: number
  }
  isLoading: boolean
  hasError: boolean
}
