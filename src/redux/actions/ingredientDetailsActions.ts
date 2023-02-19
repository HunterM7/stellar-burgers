import { TIngredientDetails } from 'redux/actionTypes'

export const SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS'
export const RESET_INGREDIENT_DETAILS = 'RESET_INGREDIENT_DETAILS'

// Actions
export interface setIngredientDetailsA {
  type: typeof SET_INGREDIENT_DETAILS
  details: TIngredientDetails
}
export interface resetIngredientDetailsA {
  type: typeof RESET_INGREDIENT_DETAILS
}

export type IngredientDetailsActions =
  | setIngredientDetailsA
  | resetIngredientDetailsA
