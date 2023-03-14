import { TRootState } from 'redux/store'

// Selectors
export const webSocketSelector = (store: TRootState) => store.allOrders
export const webSocketOrdersSelector = (store: TRootState) =>
  store.allOrders.orders
export const webSocketTotalSelector = (store: TRootState) =>
  store.allOrders.total
export const webSocketTotalTodaySelector = (store: TRootState) =>
  store.allOrders.totalToday
export const webSocketIsConnectedSelector = (store: TRootState) =>
  store.allOrders.wsConnected
export const webSocketErrorSelector = (store: TRootState) =>
  store.allOrders.error
