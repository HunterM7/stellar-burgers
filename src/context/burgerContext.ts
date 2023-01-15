import React from 'react'

// Constants
import {
  REMOVE_INGREDIENT,
  SET_BUN,
  SET_INGREDIENT,
  SET_ORDER_ID,
  SET_TOTAL_PRICE,
} from '../utils/constants'

import { dataType } from '../utils/types'

interface setBunAction {
  type: typeof SET_BUN
  bun: dataType
}
interface setIngredientAction {
  type: typeof SET_INGREDIENT
  ingredient: dataType
}
interface removeIngredientAction {
  type: typeof REMOVE_INGREDIENT
  ingredient: dataType
}
interface setTotalPricenAction {
  type: typeof SET_TOTAL_PRICE
}
interface setOrderIdAction {
  type: typeof SET_ORDER_ID
  orderId: number
}

type BurgerActions =
  | setBunAction
  | setIngredientAction
  | removeIngredientAction
  | setTotalPricenAction
  | setOrderIdAction

// Creating context
export interface BurgerStateType {
  bun: dataType
  ingredients: dataType[]
  totalPrice: number
  orderId: number
}

export const initialBurgerState: BurgerStateType = {
  bun: {} as dataType,
  ingredients: [],
  totalPrice: 0,
  orderId: 0,
}

export const BurgerContext = React.createContext<{
  stateBurger: BurgerStateType
  dispatchBurger: React.Dispatch<BurgerActions>
}>({ stateBurger: initialBurgerState, dispatchBurger: () => undefined })

// Burger Reducer
export function burgerReducer(state: BurgerStateType, action: BurgerActions) {
  switch (action.type) {
    case SET_BUN:
      return {
        ...state,
        bun: action.bun,
      }
    case SET_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      }
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (el) => el._id !== action.ingredient._id,
        ),
      }
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice:
          state.bun.price * 2 +
          state.ingredients.reduce((sum, data) => sum + data.price, 0),
      }
    case SET_ORDER_ID:
      return {
        ...state,
        orderId: action.orderId,
      }

    default:
      return state
  }
}
