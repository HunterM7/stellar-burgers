import {
  SET_INGREDIENT_DETAILS,
  RESET_INGREDIENT_DETAILS,
  setIngredientDetailsA,
  resetIngredientDetailsA,
} from 'redux/actions/ingredientDetailsActions'
import { TIngredientDetails } from 'redux/actionTypes/types'

export const resetIngredientDetails = (): resetIngredientDetailsA => ({
  type: RESET_INGREDIENT_DETAILS,
})

export const setIngredientDetails = (
  details: TIngredientDetails,
): setIngredientDetailsA => ({
  type: SET_INGREDIENT_DETAILS,
  details,
})
