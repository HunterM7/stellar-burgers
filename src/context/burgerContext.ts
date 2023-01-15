import React from 'react'

import { dataType } from '../utils/types'

interface setBunAction {
  type: 'setBun'
  bun: dataType
}
interface setIngredientAction {
  type: 'setIngredient'
  ingredient: dataType
}
interface removeIngredientAction {
  type: 'removeIngredient'
  ingredient: dataType
}
interface setTotalPricenAction {
  type: 'setTotalPrice'
}

type BurgerActions =
  | setBunAction
  | setIngredientAction
  | removeIngredientAction
  | setTotalPricenAction

// Creating context
export interface BurgerStateType {
  bun: dataType
  ingredients: dataType[]
  totalPrice: number
}

export const initialBurgerState: BurgerStateType = {
  bun: {} as dataType,
  ingredients: [],
  totalPrice: 0,
}

export const BurgerContext = React.createContext<{
  stateBurger: BurgerStateType
  dispatchBurger: React.Dispatch<BurgerActions>
}>({ stateBurger: initialBurgerState, dispatchBurger: () => undefined })

// Burger Reducer
export function burgerReducer(state: BurgerStateType, action: BurgerActions) {
  switch (action.type) {
    case 'setBun':
      return {
        ...state,
        bun: action.bun,
      }
    case 'setIngredient':
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      }
    case 'removeIngredient':
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (el) => el._id !== action.ingredient._id,
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
