import { IngredientDetailsActions } from 'redux/actions'
import {
  IngredientDetailsActionTypes,
  TIngredientDetails,
} from 'redux/actionTypes'

const initialState: TIngredientDetails = {
  title: '',
  image: '',
  calories: 0,
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
}

export const ingredientDetailsReducer = (
  state = initialState,
  action: IngredientDetailsActions,
) => {
  switch (action.type) {
    case IngredientDetailsActionTypes.SET_INGREDIENT_DETAILS:
      return {
        ...state,
        ...action.details,
      }

    case IngredientDetailsActionTypes.RESET_INGREDIENT_DETAILS:
      return initialState

    default:
      return state
  }
}
