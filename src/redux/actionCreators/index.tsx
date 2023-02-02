import {
  setRequestStatus,
  setErrorStatus,
  setSuccessStatus,
} from './dataActionCreators'
import {
  setBun,
  setIngredient,
  removeIngredient,
  reorderIngredients,
  setTotalPrice,
} from './cartActionCreators'
import {
  setRequestOrderStatus,
  setErrorOrderStatus,
  setSuccessOrderStatus,
} from './orderActionCreators'
import {
  setIngredientDetails,
  resetIngredientDetails,
} from './IngredientDetailsCreators'

export {
  // dataReducerActions
  setRequestStatus,
  setErrorStatus,
  setSuccessStatus,
  // cartReducerActions
  setBun,
  setIngredient,
  removeIngredient,
  reorderIngredients,
  setTotalPrice,
  // orderReducerActions
  setRequestOrderStatus,
  setErrorOrderStatus,
  setSuccessOrderStatus,
  // ingredientDetailsReducer
  setIngredientDetails,
  resetIngredientDetails,
}
