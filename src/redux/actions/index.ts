import { DataActions } from './dataActions'
import { CartActions } from './cartActions'
import { OrderActions } from './orderActions'
import { IngredientDetailsActions } from './ingredientDetailsActions'
import { AuthActions } from './authActions'
import { allOrdersWSActions } from './allOrdersWSActions'
import { userOrdersWSActions } from './userOrdersActions'

// Actions
export type TAppActions =
  | DataActions
  | CartActions
  | OrderActions
  | IngredientDetailsActions
  | AuthActions
  | allOrdersWSActions
  | userOrdersWSActions

// export actions
export * from './dataActions'
export * from './cartActions'
export * from './orderActions'
export * from './ingredientDetailsActions'
export * from './authActions'
export * from './allOrdersWSActions'
export * from './userOrdersActions'
