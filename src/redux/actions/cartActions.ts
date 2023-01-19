import { IngredientCartType, IngredientType } from '../actionTypes/types'

export const SET_BUN = 'SET_BUN'
export const SET_INGREDIENT = 'SET_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'

// Actions
export interface setBunA {
  type: typeof SET_BUN
  bun: IngredientType
}
export interface setIngredientA {
  type: typeof SET_INGREDIENT
  ingredient: IngredientCartType
}
export interface removeIngredientA {
  type: typeof REMOVE_INGREDIENT
  id: string
}
export interface setTotalPricenA {
  type: typeof SET_TOTAL_PRICE
}

export type CartActions =
  | setBunA
  | setIngredientA
  | removeIngredientA
  | setTotalPricenA
