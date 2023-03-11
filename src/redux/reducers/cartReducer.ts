import { CartActionTypes, TCartState } from 'redux/actionTypes'
import { CartActions } from 'redux/actions'

const initialState: TCartState = {
  bun: null,
  ingredients: [],
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

    default:
      return state
  }
}
