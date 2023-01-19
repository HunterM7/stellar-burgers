import { DataStateType, IngredientFetchStatus } from '../actionTypes/types'
import { dataActions } from '../actions/dataAction'

const initialState: DataStateType = {
  ingredients: [],
  isLoading: true,
  hasError: false,
}

export const dataReducer = (
  state: DataStateType = initialState,
  action: dataActions,
) => {
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
        ...state,
        ingredients: action.ingredients,
        isLoading: false,
      }
    }
    case IngredientFetchStatus.INGREDIENT_ERROR: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }

    default: {
      return state
    }
  }
}
