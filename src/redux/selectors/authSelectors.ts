import { TRootState } from 'redux/store'

// Selectors
export const authSelector = (store: TRootState) => store.auth
export const authUserSelector = (store: TRootState) => store.auth.user
export const authNameSelector = (store: TRootState) => store.auth.user.name
export const authEmailSelector = (store: TRootState) => store.auth.user.email
export const authIsLoggedInSelector = (store: TRootState) =>
  store.auth.user.isLoggedIn
