import { TRootState } from 'redux/store'

// Selectors
export const authSelector = (store: TRootState) => store.auth
export const authUserSelector = (store: TRootState) => store.auth.user
export const authNameSelector = (store: TRootState) => store.auth.user.name
export const authEmailSelector = (store: TRootState) => store.auth.user.email
export const authPasswordSelector = (store: TRootState) =>
  store.auth.user.password
export const authIsLoggedInSelector = (store: TRootState) =>
  store.auth.user.isLoggedIn
