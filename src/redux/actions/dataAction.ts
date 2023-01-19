import { API_URL_INGREDIENTS } from '../../utils/constants'
import { IngredientFetchStatus } from '../actionTypes/types'
import { IngredientType } from '../actionTypes/types'
import checkReponse from '../../utils/checkReponse'
import { DispatchType } from '../store'

interface setRequestStatus {
  type: typeof IngredientFetchStatus.INGREDIENT_REQUEST
}
interface setErrorStatus {
  type: typeof IngredientFetchStatus.INGREDIENT_ERROR
}
interface setSuccessStatus {
  type: typeof IngredientFetchStatus.INGREDIENT_SUCCESS
  ingredients: IngredientType[]
}

export type dataActions = setRequestStatus | setErrorStatus | setSuccessStatus

/* eslint-disable */
export function getData(): any {
  return function (dispatch: DispatchType) {
    dispatch({
      type: IngredientFetchStatus.INGREDIENT_REQUEST,
    })

    fetch(API_URL_INGREDIENTS)
      .then((res) => checkReponse<{ data: IngredientType[] }>(res))
      .then((res) => {
        dispatch({
          type: IngredientFetchStatus.INGREDIENT_SUCCESS,
          ingredients: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: IngredientFetchStatus.INGREDIENT_ERROR,
        })
      })
  }
}
