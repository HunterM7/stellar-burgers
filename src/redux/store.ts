import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

// Actions
import { TAppActions } from './actions'

// Reducers
import { dataReducer } from './reducers/dataReducer'
import { cartReducer } from './reducers/cartReducer'
import { orderReducer } from './reducers/orderReducer'
import { ingredientDetailsReducer } from './reducers/ingredientDetailsReducer'
import { authReducer } from './reducers/authReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  auth: authReducer,
})

// Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// --- --- --- --- --- --- --- ---

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
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
