import { TRootState } from '../store'

// Selectors
export const cartSelector = (store: TRootState) => store.cart
export const cartBunSelector = (store: TRootState) => store.cart.bun
export const cartIngredientsSelector = (store: TRootState) =>
  store.cart.ingredients
export const cartTotalPriceSelector = (store: TRootState) =>
  store.cart.totalPrice
