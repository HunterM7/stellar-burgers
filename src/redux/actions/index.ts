import { DataActions } from './dataActions'
import { CartActions } from './cartActions'
import { OrderActions } from './orderActions'
import { IngredientDetailsActions } from './ingredientDetailsActions'
import { AuthActions } from './authActions'
import { WSActions } from './wsActions'

// Actions
export type TAppActions =
  | DataActions
  | CartActions
  | OrderActions
  | IngredientDetailsActions
  | AuthActions
  | WSActions

// export actions
export * from './dataActions'
export * from './cartActions'
export * from './orderActions'
export * from './ingredientDetailsActions'
export * from './authActions'
export * from './wsActions'
