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

export interface TDataState {
  ingredients: TIngredient[]
  isLoading: boolean
  hasError: boolean
}

export enum IngredientsFetchStatus {
  INGREDIENTS_REQUEST = 'INGREDIENTS_REQUEST',
  INGREDIENTS_SUCCESS = 'INGREDIENTS_SUCCESS',
  INGREDIENTS_ERROR = 'INGREDIENTS_ERROR',
}
