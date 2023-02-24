import {
  setBunA,
  setIngredientA,
  removeIngredientA,
  reorderIngredientsA,
  setTotalPriceA,
} from 'redux/actions'
import {
  CartActionTypes,
  TIngredient,
  TIngredientCart,
} from 'redux/actionTypes'

export const setBun = (ingredient: TIngredient): setBunA => ({
  type: CartActionTypes.SET_BUN,
  ingredient,
})

export const setIngredient = (ingredient: TIngredient): setIngredientA => ({
  type: CartActionTypes.SET_INGREDIENT,
  ingredient: { ...ingredient, uuid: crypto.randomUUID() },
})

export const removeIngredient = (id: string): removeIngredientA => ({
  type: CartActionTypes.REMOVE_INGREDIENT,
  id,
})

export const reorderIngredients = (
  ingredients: TIngredientCart[],
): reorderIngredientsA => ({
  type: CartActionTypes.REORDER_INGREDIENTS,
  ingredients,
})

export const setTotalPrice = (): setTotalPriceA => ({
  type: CartActionTypes.SET_TOTAL_PRICE,
})
