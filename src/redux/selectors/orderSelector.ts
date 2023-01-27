import { TRootState } from '../store'

// Selectors
export const orderSelector = (store: TRootState) => store.order
export const orderIsLoadingSelector = (store: TRootState) =>
  store.order.isLoading
export const orderHasErrorSelector = (store: TRootState) => store.order.hasError
export const orderInfoSelector = (store: TRootState) => store.order.orderInfo
