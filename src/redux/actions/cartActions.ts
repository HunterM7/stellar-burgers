import { dataType } from '../../utils/types'

export const SET_BUN = 'SET_BUN'
export const SET_INGREDIENT = 'SET_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'

// Actions
interface setBunAction {
  type: typeof SET_BUN
  bun: dataType
}
interface setIngredientAction {
  type: typeof SET_INGREDIENT
  ingredient: dataType
}
interface removeIngredientAction {
  type: typeof REMOVE_INGREDIENT
  id: string
}
interface setTotalPricenAction {
  type: typeof SET_TOTAL_PRICE
}

export type Actions =
  | setBunAction
  | setIngredientAction
  | removeIngredientAction
  | setTotalPricenAction
