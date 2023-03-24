import { IngredientDetailsActions } from 'redux/actions'
import { IngredientDetailsActionTypes, TIngredient } from 'redux/actionTypes'

type IIngredientDetailsState = TIngredient | null

const initialState: IIngredientDetailsState = null

export const ingredientDetailsReducer = (
  state: IIngredientDetailsState = initialState,
  action: IngredientDetailsActions,
): IIngredientDetailsState => {
  switch (action.type) {
    case IngredientDetailsActionTypes.SET_INGREDIENT_DETAILS:
      return action.ingredient

    case IngredientDetailsActionTypes.RESET_INGREDIENT_DETAILS:
      return initialState

    default:
      return state
  }
}
