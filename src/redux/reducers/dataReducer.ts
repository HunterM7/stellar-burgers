import { IDataState, IngredientsFetchStatus } from 'redux/actionTypes'
import { DataActions } from 'redux/actions'

const initialState: IDataState = {
  ingredients: null,
  isLoading: false,
  hasError: false,
}

export const dataReducer = (
  state = initialState,
  action: DataActions,
): IDataState => {
  switch (action.type) {
    case IngredientsFetchStatus.INGREDIENTS_REQUEST: {
      return {
        ...initialState,
        isLoading: true,
      }
    }
    case IngredientsFetchStatus.INGREDIENTS_SUCCESS: {
      return {
        ...initialState,
        ingredients: action.ingredients,
      }
    }
    case IngredientsFetchStatus.INGREDIENTS_ERROR: {
      return {
        ...initialState,
        hasError: true,
      }
    }

    default: {
      return state
    }
  }
}
