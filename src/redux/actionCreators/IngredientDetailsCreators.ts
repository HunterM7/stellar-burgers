import { setIngredientDetailsA, resetIngredientDetailsA } from 'redux/actions'
import {
  IngredientDetailsActionTypes,
  TIngredientDetails,
} from 'redux/actionTypes'

export const resetIngredientDetails = (): resetIngredientDetailsA => ({
  type: IngredientDetailsActionTypes.RESET_INGREDIENT_DETAILS,
})

export const setIngredientDetails = (
  details: TIngredientDetails,
): setIngredientDetailsA => ({
  type: IngredientDetailsActionTypes.SET_INGREDIENT_DETAILS,
  details,
})
