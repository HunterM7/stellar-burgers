import {
  CartActionTypes,
  TIngredient,
  TIngredientCart,
} from 'redux/actionTypes'

// Actions
export interface setBunA {
  type: typeof CartActionTypes.SET_BUN
  ingredient: TIngredient
}
export interface setIngredientA {
  type: typeof CartActionTypes.SET_INGREDIENT
  ingredient: TIngredientCart
}
export interface removeIngredientA {
  type: typeof CartActionTypes.REMOVE_INGREDIENT
  id: string
}
export interface reorderIngredientsA {
  type: typeof CartActionTypes.REORDER_INGREDIENTS
  ingredients: TIngredientCart[]
}
export interface setTotalPriceA {
  type: typeof CartActionTypes.SET_TOTAL_PRICE
}

export type CartActions =
  | setBunA
  | setIngredientA
  | removeIngredientA
  | reorderIngredientsA
  | setTotalPriceA
