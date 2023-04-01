import { CartActions } from 'redux/actions'
import { CartActionTypes, ICartState } from 'redux/actionTypes'

const initialState: ICartState = {
  bun: null,
  ingredients: null,
}

export const cartReducer = (
  state: ICartState = initialState,
  action: CartActions,
): ICartState => {
  switch (action.type) {
    case CartActionTypes.SET_BUN:
      return {
        ...state,
        bun: action.ingredient,
      }

    case CartActionTypes.SET_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients
          ? [...state.ingredients, action.ingredient]
          : [action.ingredient],
      }

    case CartActionTypes.REMOVE_INGREDIENT: {
      if (state.ingredients) {
        const ingredients = [...state.ingredients].filter(
          item => item.uuid !== action.id,
        )

        if (ingredients.length !== 0) {
          return { ...state, ingredients }
        } else {
          return { ...state, ingredients: null }
        }
      }

      return {
        ...state,
        ingredients: null,
      }
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
