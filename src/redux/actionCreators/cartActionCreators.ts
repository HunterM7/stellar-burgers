import {
  setBunA,
  setIngredientA,
  removeIngredientA,
  reorderIngredientsA,
} from 'redux/actions'
import {
  CartActionTypes,
  TIngredient,
  TCartIngredient,
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
  ingredients: TCartIngredient[],
): reorderIngredientsA => ({
  type: CartActionTypes.REORDER_INGREDIENTS,
  ingredients,
})
