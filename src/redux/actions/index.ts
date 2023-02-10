// Actions
import { DataActions } from './dataActions'
import { CartActions } from './cartActions'
import { OrderActions } from './orderActions'
import { IngredientDetailsActions } from './ingredientDetailsActions'
import { AuthActions, getUser } from './authActions'

// Thunk actions
import { getIngredients } from './dataActions'
import { setOrder } from './orderActions'
import { handleRegister } from './authActions'
import { handleLogin } from './authActions'

export type TAppActions =
  | DataActions
  | CartActions
  | OrderActions
  | IngredientDetailsActions
  | AuthActions

export { getIngredients, setOrder, handleRegister, handleLogin, getUser }
