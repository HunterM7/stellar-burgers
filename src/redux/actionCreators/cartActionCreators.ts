import {
  SET_BUN,
  SET_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_TOTAL_PRICE,
  setBunA,
  setIngredientA,
  removeIngredientA,
  setTotalPricenA,
} from '../actions/cartActions'
import { IngredientType } from '../actionTypes/types'

export const setBun = (bun: IngredientType): setBunA => ({
  type: SET_BUN,
  bun,
})

export const setIngredient = (ingredient: IngredientType): setIngredientA => ({
  type: SET_INGREDIENT,
  ingredient,
})

export const removeIngredient = (id: string): removeIngredientA => ({
  type: REMOVE_INGREDIENT,
  id,
})

export const setTotalPrice = (): setTotalPricenA => ({
  type: SET_TOTAL_PRICE,
})
