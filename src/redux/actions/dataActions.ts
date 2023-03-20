// Redux
import { AppDispatch, AppThunk } from 'redux/store'
import { TIngredient, IngredientsFetchStatus } from 'redux/actionTypes'
import {
  setErrorStatus,
  setRequestStatus,
  setSuccessStatus,
} from 'redux/actionCreators'

// Utils
import { customFetch } from 'utils/api/customFetch'
import { IIngredientsRespose } from 'utils/types'
import { API_URL_INGREDIENTS } from 'utils/data/constants'

export interface setRequestStatusA {
  type: typeof IngredientsFetchStatus.INGREDIENTS_REQUEST
}
export interface setErrorStatusA {
  type: typeof IngredientsFetchStatus.INGREDIENTS_ERROR
}
export interface setSuccessStatusA {
  type: typeof IngredientsFetchStatus.INGREDIENTS_SUCCESS
  ingredients: TIngredient[]
}

export type DataActions =
  | setRequestStatusA
  | setErrorStatusA
  | setSuccessStatusA

export const getIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setRequestStatus())

  customFetch<IIngredientsRespose>(API_URL_INGREDIENTS)
    .then(res => dispatch(setSuccessStatus(res.data)))
    .catch(() => dispatch(setErrorStatus()))
}
