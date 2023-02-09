export interface TIngredient {
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
}

export interface TIngredientCart extends TIngredient {
  uuid: string
}

export enum IngredientFetchStatus {
  INGREDIENT_REQUEST = 'INGREDIENT_REQUEST',
  INGREDIENT_SUCCESS = 'INGREDIENT_SUCCESS',
  INGREDIENT_ERROR = 'INGREDIENT_ERROR',
}

export enum RegisterFetchStatus {
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',
}

export enum LoginFetchStatus {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

export enum OrderFetchStatus {
  ORDER_REQUEST = 'ORDER_REQUEST',
  ORDER_SUCCESS = 'ORDER_SUCCESS',
  ORDER_ERROR = 'ORDER_ERROR',
}

export interface TDataState {
  ingredients: TIngredient[]
  isLoading: boolean
  hasError: boolean
}

export interface TCartState {
  bun: TIngredient | null
  ingredients: TIngredientCart[]
  totalPrice: number
}

export interface TOrderState {
  orderInfo: {
    name: string
    order: number
  }
  isLoading: boolean
  hasError: boolean
}

export interface TIngredientDetails {
  title: string
  image: string
  calories: number
  proteins: number
  fat: number
  carbohydrates: number
}
