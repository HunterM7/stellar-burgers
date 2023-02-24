import { TDataState, IngredientsFetchStatus } from 'redux/actionTypes'
import { DataActions } from 'redux/actions'

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
    case IngredientsFetchStatus.INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }
    case IngredientsFetchStatus.INGREDIENTS_SUCCESS: {
      return {
        ingredients: action.ingredients,
        isLoading: false,
        hasError: false,
      }
    }
    case IngredientsFetchStatus.INGREDIENTS_ERROR: {
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }
    }

    default: {
      return state
    }
  }
}
