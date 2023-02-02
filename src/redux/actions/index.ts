import { CartActions } from './cartActions'
import { DataActions } from './dataActions'
import { IngredientDetailsActions } from './ingredientDetailsActions'
import { OrderActions } from './orderActions'

import { getIngredients } from './dataActions'
import { setOrder } from './orderActions'

export type TAppActions =
  | DataActions
  | CartActions
  | OrderActions
  | IngredientDetailsActions

export { getIngredients, setOrder }
