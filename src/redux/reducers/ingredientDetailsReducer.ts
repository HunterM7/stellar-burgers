import { IngredientDetailsActions } from 'redux/actions'
import {
  IngredientDetailsActionTypes,
  IIngredientDetails,
} from 'redux/actionTypes'

type IIngredientDetailsState = IIngredientDetails | null

const initialState: IIngredientDetailsState = null

export const ingredientDetailsReducer = (
  state: IIngredientDetailsState = initialState,
  action: IngredientDetailsActions,
): IIngredientDetailsState => {
  switch (action.type) {
    case IngredientDetailsActionTypes.SET_INGREDIENT_DETAILS:
      return {
        ...action.details,
      }

    case IngredientDetailsActionTypes.RESET_INGREDIENT_DETAILS:
      return initialState

    default:
      return state
  }
}
