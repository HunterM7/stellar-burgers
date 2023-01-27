import { TRootState } from '../store'

// Selectors
export const ingredientDetailsSelector = (store: TRootState) =>
  store.ingredientDetails
