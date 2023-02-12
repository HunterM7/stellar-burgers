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
import {
  authSelector,
  authUserSelector,
  authNameSelector,
  authEmailSelector,
  authPasswordSelector,
  authIsLoggedInSelector,
} from './authSelectors'

export {
  // data selectors
  dataSelector,
  dataIsLoadingSelector,
  dataHasErrorSelector,
  dataIngreientsSelector,
  // cart selectors
  cartSelector,
  cartBunSelector,
  cartIngredientsSelector,
  cartTotalPriceSelector,
  // order selectors
  orderSelector,
  orderIsLoadingSelector,
  orderHasErrorSelector,
  orderInfoSelector,
  // ingredientDetails selectors
  ingredientDetailsSelector,
  // auth selectors
  authSelector,
  authUserSelector,
  authNameSelector,
  authEmailSelector,
  authPasswordSelector,
  authIsLoggedInSelector,
}
