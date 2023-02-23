// Actions
import { DataActions } from './dataActions'
import { CartActions } from './cartActions'
import { OrderActions } from './orderActions'
import { IngredientDetailsActions } from './ingredientDetailsActions'
import { AuthActions } from './authActions'

export type TAppActions =
  | DataActions
  | CartActions
  | OrderActions
  | IngredientDetailsActions
  | AuthActions

// Thunk actions
export * from './dataActions'
export * from './orderActions'
export * from './authActions'
export * from './authActions'
export * from './authActions'
