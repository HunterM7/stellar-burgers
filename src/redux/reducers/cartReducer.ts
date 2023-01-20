import { TCartState } from '../actionTypes/types'

import {
  CartActions,
  SET_BUN,
  SET_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_TOTAL_PRICE,
} from '../actions/cartActions'

const initialState: TCartState = {
  bun: null,
  ingredients: [],
  totalPrice: 0,
}

export const cartReducer = (
  state: TCartState = initialState,
  action: CartActions,
): TCartState => {
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
          (item) => item.uuid !== action.id,
        ),
      }

    case SET_TOTAL_PRICE: {
      const bunPrice = state.bun ? state.bun.price * 2 : 0
      const ingredientsPrice = state.ingredients.reduce(
        (sum, item) => sum + item.price,
        0,
      )
      return {
        ...state,
        totalPrice: bunPrice + ingredientsPrice,
      }
    }

    default:
      return state
  }
}
