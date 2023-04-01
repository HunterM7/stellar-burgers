import { TIngredient } from 'redux/actionTypes'

export interface ICartIngredient extends TIngredient {
  uuid: string
}

export interface ICartState {
  bun: TIngredient | null
  ingredients: ICartIngredient[] | null
}

export enum CartActionTypes {
  SET_BUN = 'SET_BUN',
  SET_INGREDIENT = 'SET_INGREDIENT',
  REMOVE_INGREDIENT = 'REMOVE_INGREDIENT',
  REORDER_INGREDIENTS = 'REORDER_INGREDIENTS',
}
