import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux'

// RootReducer
import { rootReducer } from 'redux/reducers'

// Actions
import { TAppActions } from 'redux/actions'
import { WS_ALL_ORDERS, WS_USER_ORDERS } from 'utils/data/constants'

// Middleware
import { allOrdersWSMiddleware } from 'redux/middleware/allOrdersWSMiddleware'
import { userOrdersWSMiddleware } from 'redux/middleware/userOrdersWSMiddleware'

// Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      allOrdersWSMiddleware(WS_ALL_ORDERS),
      userOrdersWSMiddleware(WS_USER_ORDERS),
    ),
  ),
)

export type TRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<TRootState, never, TAppActions>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  never,
  TAppActions
>

export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook
