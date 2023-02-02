import {
  dataSelector,
  dataIsLoadingSelector,
  dataHasErrorSelector,
  dataIngreientsSelector,
} from './dataSelector'
import {
  cartSelector,
  cartBunSelector,
  cartIngredientsSelector,
  cartTotalPriceSelector,
} from './cartSelectors'
import {
  orderSelector,
  orderIsLoadingSelector,
  orderHasErrorSelector,
  orderInfoSelector,
} from './orderSelector'
import { ingredientDetailsSelector } from './ingredientDetailsSelector'

export {
  // dataReducer selectors
  dataSelector,
  dataIsLoadingSelector,
  dataHasErrorSelector,
  dataIngreientsSelector,
  // cartReducer selectors
  cartSelector,
  cartBunSelector,
  cartIngredientsSelector,
  cartTotalPriceSelector,
  // orderReducer selectors
  orderSelector,
  orderIsLoadingSelector,
  orderHasErrorSelector,
  orderInfoSelector,
  // ingredientDetailsReducer selectors
  ingredientDetailsSelector,
}
