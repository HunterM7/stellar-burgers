import { TRootState } from '../store'

// Selectors
export const dataSelector = (store: TRootState) => store.data
export const dataIsLoadingSelector = (store: TRootState) => store.data.isLoading
export const dataHasErrorSelector = (store: TRootState) => store.data.hasError
export const dataIngreientsSelector = (store: TRootState) =>
  store.data.ingredients
