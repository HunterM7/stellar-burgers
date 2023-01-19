import {
  SET_BUN,
  SET_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_TOTAL_PRICE,
  setBunAction,
  setIngredientAction,
  removeIngredientAction,
  setTotalPricenAction,
} from '../actions/cartActions'
import { IngredientType } from '../actionTypes/types'

export const setBun = (bun: IngredientType): setBunAction => ({
  type: SET_BUN,
  bun,
})

export const setIngredient = (
  ingredient: IngredientType,
): setIngredientAction => ({
  type: SET_INGREDIENT,
  ingredient,
})

export const removeIngredient = (id: string): removeIngredientAction => ({
  type: REMOVE_INGREDIENT,
  id,
})

export const setTotalPrice = (): setTotalPricenAction => ({
  type: SET_TOTAL_PRICE,
})
