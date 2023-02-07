import { TCartState } from 'redux/actionTypes'
import {
  CartActions,
  SET_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_TOTAL_PRICE,
  REORDER_INGREDIENTS,
  SET_BUN,
} from 'redux/actions/cartActions'

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
        bun: action.ingredient,
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

    case REORDER_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
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
