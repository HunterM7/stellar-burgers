export interface TIngredientDetails {
  title: string
  image: string
  calories: number
  proteins: number
  fat: number
  carbohydrates: number
}

export enum IngredientDetailsActionTypes {
  SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS',
  RESET_INGREDIENT_DETAILS = 'RESET_INGREDIENT_DETAILS',
}
