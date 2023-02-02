import {
  setErrorStatusA,
  setRequestStatusA,
  setSuccessStatusA,
} from 'redux/actions/dataActions'
import { TIngredient, IngredientFetchStatus } from 'redux/actionTypes/types'

export const setRequestStatus = (): setRequestStatusA => ({
  type: IngredientFetchStatus.INGREDIENT_REQUEST,
})

export const setErrorStatus = (): setErrorStatusA => ({
  type: IngredientFetchStatus.INGREDIENT_ERROR,
})

export const setSuccessStatus = (
  ingredients: TIngredient[],
): setSuccessStatusA => ({
  type: IngredientFetchStatus.INGREDIENT_SUCCESS,
  ingredients,
})
