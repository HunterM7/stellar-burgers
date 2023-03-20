import { setIngredientDetailsA, resetIngredientDetailsA } from 'redux/actions'
import {
  IngredientDetailsActionTypes,
  IIngredientDetails,
} from 'redux/actionTypes'

export const resetIngredientDetails = (): resetIngredientDetailsA => ({
  type: IngredientDetailsActionTypes.RESET_INGREDIENT_DETAILS,
})

export const setIngredientDetails = (
  details: IIngredientDetails,
): setIngredientDetailsA => ({
  type: IngredientDetailsActionTypes.SET_INGREDIENT_DETAILS,
  details,
})
