export interface IngredientType {
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

export interface IngredientCartType extends IngredientType {
  uuid: string
}

export enum IngredientFetchStatus {
  INGREDIENT_REQUEST = 'INGREDIENT_REQUEST',
  INGREDIENT_SUCCESS = 'INGREDIENT_SUCCESS',
  INGREDIENT_ERROR = 'INGREDIENT_ERROR',
}

export enum OrderFetchStatus {
  ORDER_REQUEST = 'ORDER_REQUEST',
  ORDER_SUCCESS = 'ORDER_SUCCESS',
  ORDER_ERROR = 'ORDER_ERROR',
}

export interface DataStateType {
  ingredients: IngredientType[]
  isLoading: boolean
  hasError: boolean
}

export interface CartStateType {
  bun: IngredientType | null
  ingredients: IngredientCartType[]
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
