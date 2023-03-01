export interface TIngredient {
  _id: string
  name: string
  type: 'bun' | 'sauce' | 'main'
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
}

export interface TCartIngredient extends TIngredient {
  uuid: string
}

export interface TDataState {
  ingredients: TIngredient[]
  isLoading: boolean
  hasError: boolean
}

export interface TCartState {
  bun: TIngredient | null
  ingredients: TCartIngredient[]
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

// Action types
// Ingredient Reducer
export enum IngredientsFetchStatus {
  INGREDIENTS_REQUEST = 'INGREDIENTS_REQUEST',
  INGREDIENTS_SUCCESS = 'INGREDIENTS_SUCCESS',
  INGREDIENTS_ERROR = 'INGREDIENTS_ERROR',
}

// Auth Reducer
export enum AuthFetchStatus {
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',

  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',

  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR',

  GET_USER_REQUEST = 'GET_USER_REQUEST',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_ERROR = 'GET_USER_ERROR',

  SET_USER_REQUEST = 'SET_USER_REQUEST',
  SET_USER_SUCCESS = 'SET_USER_SUCCESS',
  SET_USER_ERROR = 'SET_USER_ERROR',
}

// Order Reducer
export enum OrderFetchStatus {
  ORDER_REQUEST = 'ORDER_REQUEST',
  ORDER_SUCCESS = 'ORDER_SUCCESS',
  ORDER_ERROR = 'ORDER_ERROR',
}

export enum CartActionTypes {
  SET_BUN = 'SET_BUN',
  SET_INGREDIENT = 'SET_INGREDIENT',
  REMOVE_INGREDIENT = 'REMOVE_INGREDIENT',
  REORDER_INGREDIENTS = 'REORDER_INGREDIENTS',
  SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
}

export enum IngredientDetailsActionTypes {
  SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS',
  RESET_INGREDIENT_DETAILS = 'RESET_INGREDIENT_DETAILS',
}
