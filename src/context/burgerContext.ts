import React from 'react'

import { dataType } from '../utils/types'

export interface BurgerStateType {
  bun: dataType
  ingredients: dataType[]
  totalPrice: number
}

export type BurgerActions =
  | 'setBun'
  | 'setIngredient'
  | 'removeIngredient'
  | 'setTotalPrice'

interface ActionTypes {
  type: BurgerActions
  payload: dataType
}

export const initialBurgerState: BurgerStateType = {
  bun: {} as dataType,
  ingredients: [],
  totalPrice: 0,
}

export const BurgerContext = React.createContext<{
  stateBurger: BurgerStateType
  dispatchBurger: React.Dispatch<ActionTypes>
}>({ stateBurger: initialBurgerState, dispatchBurger: () => undefined })

export function burgerReducer(state: BurgerStateType, action: ActionTypes) {
  switch (action.type) {
    case 'setBun':
      return {
        ...state,
        bun: action.payload,
      }
    case 'setIngredient':
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      }
    case 'removeIngredient':
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (el) => el._id !== action.payload._id,
        ),
      }
    case 'setTotalPrice':
      return {
        ...state,
        totalPrice:
          state.bun.price * 2 +
          state.ingredients.reduce((sum, data) => sum + data.price, 0),
      }

    default:
      return state
  }
}
