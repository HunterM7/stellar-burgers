import { DispatchType } from '../store'
import { checkReponse } from '../../utils/checkReponse'
import { API_URL_INGREDIENTS } from '../../utils/constants'
import { TIngredient, IngredientFetchStatus } from '../actionTypes/types'
import {
  setErrorStatus,
  setRequestStatus,
  setSuccessStatus,
} from '../actionCreators/dataActionCreators'

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

/* eslint-disable */
export function getIngredients(): any {
  return function (dispatch: DispatchType) {
    dispatch(setRequestStatus())

    fetch(API_URL_INGREDIENTS)
      .then((res) => checkReponse<{ data: TIngredient[] }>(res))
      .then((res) => {
        dispatch(setSuccessStatus(res.data))
      })
      .catch((err) => {
        dispatch(setErrorStatus())
      })
  }
}