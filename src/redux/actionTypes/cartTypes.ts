import { TIngredient } from 'redux/actionTypes'

export interface TCartIngredient extends TIngredient {
  uuid: string
}

export interface TCartState {
  bun: TIngredient | null
  ingredients: TCartIngredient[]
  totalPrice: number
}

export enum CartActionTypes {
  SET_BUN = 'SET_BUN',
  SET_INGREDIENT = 'SET_INGREDIENT',
  REMOVE_INGREDIENT = 'REMOVE_INGREDIENT',
  REORDER_INGREDIENTS = 'REORDER_INGREDIENTS',
  SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
}
