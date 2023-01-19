import { DataType } from '../../utils/types'
import { CartStateType } from '../actionTypes/types'

import {
  Actions,
  SET_BUN,
  SET_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_TOTAL_PRICE,
} from '../actions/cartActions'

const initialState: CartStateType = {
  bun: {} as DataType,
  ingredients: [],
  totalPrice: 0,
}

export const cartReducer = (
  state: CartStateType = initialState,
  action: Actions,
) => {
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
          (item) => item._id !== action.id,
        ),
      }

    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice:
          state.bun.price * 2 +
          state.ingredients.reduce((sum, item) => sum + item.price, 0),
      }

    default:
      return state
  }
}
