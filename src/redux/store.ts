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
import { WS_ALL_ORDERS } from 'utils/data/constants'
import { socketMiddleware } from 'redux/middleware/socketMiddleware'

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
  composeWithDevTools(applyMiddleware(thunk, socketMiddleware(WS_ALL_ORDERS))),
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
