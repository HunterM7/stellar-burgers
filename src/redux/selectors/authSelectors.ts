import { TRootState } from 'redux/store'

// Selectors
export const authSelector = (store: TRootState) => store.auth
export const authUserSelector = (store: TRootState) => store.auth.user
export const authIsLoadingSelector = (store: TRootState) => store.auth.isLoading
export const authHasErrorSelector = (store: TRootState) => store.auth.hasError
