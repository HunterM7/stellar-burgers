// Redux
import { AppDispatch, AppThunk } from 'redux/store'
import { TIngredient, IngredientFetchStatus } from 'redux/actionTypes'
import {
  setErrorStatus,
  setRequestStatus,
  setSuccessStatus,
} from 'redux/actionCreators'

// Utils
import { checkReponse } from 'utils/api/checkReponse'
import { API_URL_INGREDIENTS } from 'utils/data/constants'

export interface setRequestStatusA {
  type: typeof IngredientFetchStatus.INGREDIENT_REQUEST
}
export interface setErrorStatusA {
  type: typeof IngredientFetchStatus.INGREDIENT_ERROR
}
export interface setSuccessStatusA {
  type: typeof IngredientFetchStatus.INGREDIENT_SUCCESS
  ingredients: TIngredient[]
}

export type DataActions =
  | setRequestStatusA
  | setErrorStatusA
  | setSuccessStatusA

export const getIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setRequestStatus())

  fetch(API_URL_INGREDIENTS)
    .then(res => checkReponse<{ data: TIngredient[] }>(res))
    .then(res => {
      dispatch(setSuccessStatus(res.data))
    })
    .catch(err => {
      dispatch(setErrorStatus())
    })
}
