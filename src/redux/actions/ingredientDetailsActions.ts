import {
  IngredientDetailsActionTypes,
  TIngredientDetails,
} from 'redux/actionTypes'

// Actions
export interface setIngredientDetailsA {
  type: typeof IngredientDetailsActionTypes.SET_INGREDIENT_DETAILS
  details: TIngredientDetails
}
export interface resetIngredientDetailsA {
  type: typeof IngredientDetailsActionTypes.RESET_INGREDIENT_DETAILS
}

export type IngredientDetailsActions =
  | setIngredientDetailsA
  | resetIngredientDetailsA
