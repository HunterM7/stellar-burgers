import {
  CartActionTypes,
  TIngredient,
  TCartIngredient,
} from 'redux/actionTypes'

// Actions
export interface setBunA {
  type: typeof CartActionTypes.SET_BUN
  ingredient: TIngredient
}
export interface setIngredientA {
  type: typeof CartActionTypes.SET_INGREDIENT
  ingredient: TCartIngredient
}
export interface removeIngredientA {
  type: typeof CartActionTypes.REMOVE_INGREDIENT
  id: string
}
export interface reorderIngredientsA {
  type: typeof CartActionTypes.REORDER_INGREDIENTS
  ingredients: TCartIngredient[]
}

export type CartActions =
  | setBunA
  | setIngredientA
  | removeIngredientA
  | reorderIngredientsA
