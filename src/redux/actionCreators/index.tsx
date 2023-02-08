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
import {
  registerError,
  registerRequest,
  registerSuccess,
  authChangeEmail,
  authChangeName,
  authChangePassword,
} from './authActionCreators'

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
  // authReducer
  registerRequest,
  registerError,
  registerSuccess,
  authChangeEmail,
  authChangeName,
  authChangePassword,
}
