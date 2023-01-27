import {
  IngredientDetailsActions,
  RESET_INGREDIENT_DETAILS,
  SET_INGREDIENT_DETAILS,
} from '../actions/ingredientDetailsActions'
import { TIngredientDetails } from '../actionTypes/types'

const initialState: TIngredientDetails = {
  title: '',
  image: '',
  calories: 0,
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
}

export const IngredientDetailsReducer = (
  state = initialState,
  action: IngredientDetailsActions,
) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS:
      return {
        ...action.details,
      }

    case RESET_INGREDIENT_DETAILS:
      return initialState

    default:
      return state
  }
}
