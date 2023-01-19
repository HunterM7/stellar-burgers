import { IngredientType } from '../actionTypes/types'

export const SET_BUN = 'SET_BUN'
export const SET_INGREDIENT = 'SET_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'

// Actions
export interface setBunAction {
  type: typeof SET_BUN
  bun: IngredientType
}
export interface setIngredientAction {
  type: typeof SET_INGREDIENT
  ingredient: IngredientType
}
export interface removeIngredientAction {
  type: typeof REMOVE_INGREDIENT
  id: string
}
export interface setTotalPricenAction {
  type: typeof SET_TOTAL_PRICE
}

export type Actions =
  | setBunAction
  | setIngredientAction
  | removeIngredientAction
  | setTotalPricenAction
