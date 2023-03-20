import {
  setErrorStatusA,
  setRequestStatusA,
  setSuccessStatusA,
} from 'redux/actions'
import { TIngredient, IngredientsFetchStatus } from 'redux/actionTypes'

export const setRequestStatus = (): setRequestStatusA => ({
  type: IngredientsFetchStatus.INGREDIENTS_REQUEST,
})

export const setErrorStatus = (): setErrorStatusA => ({
  type: IngredientsFetchStatus.INGREDIENTS_ERROR,
})

export const setSuccessStatus = (
  ingredients: TIngredient[],
): setSuccessStatusA => ({
  type: IngredientsFetchStatus.INGREDIENTS_SUCCESS,
  ingredients,
})
