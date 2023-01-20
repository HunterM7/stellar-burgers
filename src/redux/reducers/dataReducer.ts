import { TDataState, IngredientFetchStatus } from '../actionTypes/types'
import { DataActions } from '../actions/dataActions'

const initialState: TDataState = {
  ingredients: [],
  isLoading: true,
  hasError: false,
}

export const dataReducer = (
  state = initialState,
  action: DataActions,
): TDataState => {
  switch (action.type) {
    case IngredientFetchStatus.INGREDIENT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }
    case IngredientFetchStatus.INGREDIENT_SUCCESS: {
      return {
        ingredients: action.ingredients,
        isLoading: false,
        hasError: false,
      }
    }
    case IngredientFetchStatus.INGREDIENT_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    }

    default: {
      return state
    }
  }
}
