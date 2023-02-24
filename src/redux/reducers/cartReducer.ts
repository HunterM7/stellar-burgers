import { CartActionTypes, TCartState } from 'redux/actionTypes'
import { CartActions } from 'redux/actions'

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
    case CartActionTypes.SET_BUN:
      return {
        ...state,
        bun: action.ingredient,
      }

    case CartActionTypes.SET_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      }

    case CartActionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          item => item.uuid !== action.id,
        ),
      }

    case CartActionTypes.REORDER_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
      }

    case CartActionTypes.SET_TOTAL_PRICE: {
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
