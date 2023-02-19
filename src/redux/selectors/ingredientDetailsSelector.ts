import { TRootState } from 'redux/store'

// Selectors
export const ingredientDetailsSelector = (store: TRootState) =>
  store.ingredientDetails
