import {
  setBunA,
  setIngredientA,
  removeIngredientA,
  reorderIngredientsA,
} from 'redux/actions'
import {
  CartActionTypes,
  TIngredient,
  ICartIngredient,
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
  ingredients: ICartIngredient[],
): reorderIngredientsA => ({
  type: CartActionTypes.REORDER_INGREDIENTS,
  ingredients,
})
