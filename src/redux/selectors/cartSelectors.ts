import { TRootState } from 'redux/store'

// Selectors
export const cartSelector = (store: TRootState) => store.cart
export const cartBunSelector = (store: TRootState) => store.cart.bun
export const cartIngredientsSelector = (store: TRootState) =>
  store.cart.ingredients
