import { setIngredientDetailsA, resetIngredientDetailsA } from 'redux/actions'
import { TIngredient, IngredientDetailsActionTypes } from 'redux/actionTypes'

export const resetIngredientDetails = (): resetIngredientDetailsA => ({
  type: IngredientDetailsActionTypes.RESET_INGREDIENT_DETAILS,
})

export const setIngredientDetails = (
  ingredient: TIngredient,
): setIngredientDetailsA => ({
  type: IngredientDetailsActionTypes.SET_INGREDIENT_DETAILS,
  ingredient,
})
