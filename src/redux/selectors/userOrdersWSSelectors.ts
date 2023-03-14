import { TRootState } from 'redux/store'

// Selectors
export const userWSSelector = (store: TRootState) => store.userOrders
export const userOrdersSelector = (store: TRootState) => store.userOrders.orders
export const userTotalSelector = (store: TRootState) => store.userOrders.total
export const userTotalTodaySelector = (store: TRootState) =>
  store.userOrders.totalToday
export const userIsConnectedSelector = (store: TRootState) =>
  store.userOrders.wsConnected
export const userErrorSelector = (store: TRootState) => store.userOrders.error
