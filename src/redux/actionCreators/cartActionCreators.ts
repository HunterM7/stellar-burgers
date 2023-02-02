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
import { TIngredient, TIngredientCart } from 'redux/actionTypes/types'

export const setBun = (bun: TIngredient): setBunA => ({
  type: SET_BUN,
  bun,
})

export const setIngredient = (ingredient: TIngredientCart): setIngredientA => ({
  type: SET_INGREDIENT,
  ingredient,
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
