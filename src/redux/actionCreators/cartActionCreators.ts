import {
  SET_BUN,
  SET_INGREDIENT,
  REMOVE_INGREDIENT,
  REORDER_INGREDIENTS,
  SET_TOTAL_PRICE,
  setBunA,
  setIngredientA,
  removeIngredientA,
  reorderIngredientsA,
  setTotalPriceA,
} from 'redux/actions/cartActions'
import { TIngredient, TIngredientCart } from 'redux/actionTypes'

export const setBun = (ingredient: TIngredient): setBunA => ({
  type: SET_BUN,
  ingredient,
})

export const setIngredient = (ingredient: TIngredient): setIngredientA => ({
  type: SET_INGREDIENT,
  ingredient: { ...ingredient, uuid: crypto.randomUUID() },
})

export const removeIngredient = (id: string): removeIngredientA => ({
  type: REMOVE_INGREDIENT,
  id,
})

export const reorderIngredients = (
  ingredients: TIngredientCart[],
): reorderIngredientsA => ({
  type: REORDER_INGREDIENTS,
  ingredients,
})

export const setTotalPrice = (): setTotalPriceA => ({
  type: SET_TOTAL_PRICE,
})
