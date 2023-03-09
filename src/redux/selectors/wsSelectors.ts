import { TRootState } from 'redux/store'

// Selectors
export const webSocketSelector = (store: TRootState) => store.socket
export const webSocketOrdersSelector = (store: TRootState) =>
  store.socket.orders
export const webSocketTotalSelector = (store: TRootState) => store.socket.total
export const webSocketTotalTodaySelector = (store: TRootState) =>
  store.socket.totalToday
export const webSocketIsConnectedSelector = (store: TRootState) =>
  store.socket.wsConnected
export const webSocketErrorSelector = (store: TRootState) => store.socket.error
