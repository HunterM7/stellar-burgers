import {
  SET_BUN,
  SET_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_TOTAL_PRICE,
  setBunA,
  setIngredientA,
  removeIngredientA,
  setTotalPriceA,
} from '../actions/cartActions'
import { TIngredient, TIngredientCart } from '../actionTypes/types'

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

export const setTotalPrice = (): setTotalPriceA => ({
  type: SET_TOTAL_PRICE,
})
